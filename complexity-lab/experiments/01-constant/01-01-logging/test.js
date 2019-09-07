const { logArray } = require('./loggingArray')
const { executeAlgorithm } = require('../../../utils/ComplexityHarness')
const { generateOrderedNumbers, generateUnorderedNumbers } = require('../../../generators/array')

const inputs = [
  generateOrderedNumbers(1),
  generateOrderedNumbers(10),
  generateOrderedNumbers(100),

  generateUnorderedNumbers(1),
  generateUnorderedNumbers(10),
  generateUnorderedNumbers(100)
]

executeAlgorithm(logArray, inputs)
