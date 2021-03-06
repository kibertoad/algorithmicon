const MAX_AMOUNT_OF_BUCKETS = 1000

function calculateHash(stringValue) {
  let hash = 0
  let i, chr
  if (stringValue.length === 0) {
    return hash
  }
  for (i = 0; i < stringValue.length; i++) {
    chr = stringValue.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function calculateIndexForHash(hash) {
  return hash % MAX_AMOUNT_OF_BUCKETS
}

function generateHashTable(stringValues) {
  return stringValues.reduce((acc, value) => {
    const hash = calculateHash(value)
    const valueIndex = calculateIndexForHash(hash)
    if (!acc[valueIndex]) {
      acc[valueIndex] = []
    }
    const bucket = acc[valueIndex]

    const bucketEntry = {
      key: value,
      value: `${value} value`
    }

    bucket.push(bucketEntry)
    return acc
  }, {})
}

module.exports = {
  calculateHash,
  calculateIndexForHash,
  generateHashTable
}
