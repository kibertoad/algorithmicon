const fs = require('fs')
const path = require('path')
const eol = require('eol')

const DEFAULT_OPTIONS = Object.freeze({
  timeout: 10000
})

class TheJudge {
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
  }

  judgeByFiles(inputDir, outputDir, implementationFn) {
    const baseDir = this.options.baseDir
    const resolvedInputDir = baseDir ? path.resolve(baseDir, inputDir) : inputDir
    const resolvedOutputDir = baseDir ? path.resolve(baseDir, outputDir) : outputDir

    return loadInputsAndOutputs(resolvedInputDir, resolvedOutputDir).then((inputs) => {
      return compareOutputs(inputs, implementationFn)
    })
  }
}

function compareOutputs(inputs, implementationFn) {
  const result = {
    errors: []
  }
  inputs.forEach((inputFile) => {
    const actualOutput = implementationFn(inputFile.input).map((line) => {
      return line.toString()
    })

    if (!arraysEqual(actualOutput, inputFile.expectedOutput)) {
      const error = `Result mismatch for input ${inputFile.filename}. Expected: ${inputFile.expectedOutput}, actual ${actualOutput}`
      console.error(error)
      result.errors.push(error)
    }
  })

  return result
}

function loadInputsAndOutputs(inputDir, outputDir) {
  return new Promise((resolve, reject) => {
    const inputs = []
    assertDirExists(inputDir)
    assertDirExists(outputDir)

    // Read inputs
    fs.readdir(inputDir, (err, filenames) => {
      if (err) {
        reject(err)
      }
      filenames.forEach((filename) => {
        const input = fs.readFileSync(path.resolve(inputDir, filename))
        inputs.push({
          filename,
          input: eol.split(input.toString()).filter((line) => {
            return line.length > 0
          })
        })
      })

      // Read expected outputs
      fs.readdir(outputDir, (err) => {
        if (err) {
          reject(err)
        }
        inputs.forEach((input) => {
          const output = fs.readFileSync(path.resolve(outputDir, input.filename))
          input.expectedOutput = eol.split(output.toString()).filter((line) => {
            return line.length > 0
          })
        })
        resolve(inputs)
      })
    })

    function assertDirExists(dirPath) {
      if (!fs.existsSync(dirPath)) {
        reject(`Directory does not exist: ${dirPath}`)
      }
    }
  })
}

function arraysEqual(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

module.exports = {
  TheJudge
}
