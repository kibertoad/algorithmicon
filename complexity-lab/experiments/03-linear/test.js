const { logValues } = require('./loggingEachValue')
const { executeAlgorithm } = require('../../utils/ComplexityHarness')
const { generateOrderedNumbers } = require('../../generators/array')

const inputs = [
  generateOrderedNumbers(1),
  generateOrderedNumbers(10),
  generateOrderedNumbers(100),
]

executeAlgorithm(logValues, inputs)
