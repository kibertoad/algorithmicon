const { hashTableLookup } = require('./hashTable')
const { executeAlgorithm } = require('../../../utils/ComplexityHarness')
const { generateOrderedStrings } = require('../../../generators/array')
const { generateHashTable } = require('../../../generators/hash')

const inputs = [
  {
    hashTable: generateHashTable(generateOrderedStrings(5)),
    keyToLookUp: 'C',
    length: 5
  },
  {
    hashTable: generateHashTable(generateOrderedStrings(100)),
    keyToLookUp: 'AA',
    length: 100
  },
  {
    hashTable: generateHashTable(generateOrderedStrings(10000)),
    keyToLookUp: 'CC',
    length: 10000
  },
  {
    hashTable: generateHashTable(generateOrderedStrings(10000)),
    keyToLookUp: 'dummy',
    length: 10000
  }
]

executeAlgorithm(hashTableLookup, inputs)
