const { StepCounter } = require('./StepCounter')

function executeAlgorithm(implementationFn, inputs) {
  inputs.forEach((input) => {
    console.log(`Start execution with input size: ${input.length}`)
    const counter = new StepCounter()
    implementationFn(input, counter)
    console.log(`                Execution steps: ${counter.stepsExecuted}`)
  })
}

module.exports = {
  executeAlgorithm
}
