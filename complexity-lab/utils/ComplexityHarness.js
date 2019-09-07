const { ComplexityCalculator } = require('./ComplexityCalculator')

function executeAlgorithm(implementationFn, inputs) {
  inputs.forEach((input) => {
    const calculator = new ComplexityCalculator()
    implementationFn(input, calculator)
    console.log(`Input size ${input.length}. Execution steps: ${calculator.stepsExecuted}`)
  })
}

module.exports = {
  executeAlgorithm
}
