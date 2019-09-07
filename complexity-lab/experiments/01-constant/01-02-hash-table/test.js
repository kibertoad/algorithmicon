const { hashTableLookup } = require('./hashTable')
const { executeAlgorithm } = require('../../../utils/ComplexityHarness')
const { generateOrderedStrings } = require('../../../generators/array')
const { generateHashTable } = require('../../../generators/hash')

const inputs = [
  {
    hashTable: generateHashTable(generateOrderedStrings(5)),
    keyToLookUp: 'a',
    length: 2
  },
  {
    hashTable: generateHashTable(['a', 'b']),
    keyToLookUp: 'a',
    length: 2
  },
  {
    hashTable: generateHashTable(['a', 'b']),
    keyToLookUp: 'b',
    length: 2
  }
]

executeAlgorithm(hashTableLookup, inputs)
