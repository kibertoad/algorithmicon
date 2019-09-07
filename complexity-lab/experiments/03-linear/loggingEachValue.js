function logValues(input, calculator) {
  let consoleOutput = ''
  input.forEach((value) => {
    consoleOutput += `${value}; `
    calculator.executeStep()
  })
  console.log(consoleOutput)
}

module.exports = {
  logValues
}
