/*

Complexity of this solution is O(n-power(2)) in worst and average case scenarios

*/

function implementationFn(inputLines) {
  const inputArray = inputLines[0].split(' ').map((entry) => {
    return Number.parseInt(entry)
  })
  if (inputArray.length < 2) {
    return inputArray
  }

  for (
    let globalIterationIndex = 1;
    globalIterationIndex < inputArray.length;
    globalIterationIndex++
  ) {
    let gapIndex = globalIterationIndex
    const bufferValue = inputArray[gapIndex]

    for (let peekIndex = gapIndex - 1; peekIndex >= 0; peekIndex--) {
      const peekedValue = inputArray[peekIndex]

      // stop iteration, everything to the left is also smaller
      if (peekedValue <= bufferValue) {
        break
      }

      if (peekedValue > bufferValue) {
        inputArray[gapIndex] = peekedValue
        gapIndex = peekIndex
      }
    }
    inputArray[gapIndex] = bufferValue
  }

  return inputArray
}

module.exports = {
  implementationFn
}
