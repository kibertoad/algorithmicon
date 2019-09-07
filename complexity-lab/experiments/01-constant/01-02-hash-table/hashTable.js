const { calculateHash, calculateIndexForHash } = require('../../../generators/hash')

function hashTableLookup(input, calculator) {
  const { keyToLookUp, hashTable } = input
  const hash = calculateHash(keyToLookUp)
  const bucketIndex = calculateIndexForHash(hash)
  const bucket = hashTable[bucketIndex]
  if (!bucket) {
    calculator.executeStep()
    return
  }

  for (let i = 0; i < bucket.length; i++) {
    calculator.executeStep()
    const bucketEntry = bucket[i]
    if (bucketEntry.key === keyToLookUp) {
      return bucketEntry.value
    }
  }

  console.log('Input was received')
  calculator.executeStep()
}

module.exports = {
  hashTableLookup
}
