const { calculateHash, calculateIndexForHash } = require('../../../generators/hash')

function hashTableLookup(input, counter) {
  const { keyToLookUp, hashTable } = input
  const hash = calculateHash(keyToLookUp)
  const bucketIndex = calculateIndexForHash(hash)
  const bucket = hashTable[bucketIndex]
  if (!bucket) {
    console.log('Bucket not found')
    counter.executeStep()
    return
  }

  for (let i = 0; i < bucket.length; i++) {
    counter.executeStep()
    const bucketEntry = bucket[i]
    if (bucketEntry.key === keyToLookUp) {
      return bucketEntry.value
    }
  }

  console.log('Key not found')
}

module.exports = {
  hashTableLookup
}
