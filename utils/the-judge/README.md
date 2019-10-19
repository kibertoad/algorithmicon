# The Judge

## Sample usage

```
const { implementationFn } = require('./uniqueChars')
const { TheJudge } = require('judge')

const judge = new TheJudge({
  baseDir: __dirname
})

// 'inputs' and 'outputs' are folders in root directory with matching files for inputs and outputs
judge.judgeByFiles('inputs', 'outputs', implementationFn).then((result) => {
  console.log(JSON.stringify(result))
  process.exit(0)
})

```

## Sample function implementation

```
// inputLines is an array of strings, where each string is a line from input file
function implementationFn(inputLines) {
  const inputString = inputLines[0]
  const result = []

  // Your implementation

  // Result is expected to be an array of strings, where each string is a line from output file
  return result
}

module.exports = {
  implementationFn
}
```
