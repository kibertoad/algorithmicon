/*

Difficulty: Easy (2)
Problem statement: Reverse order of elements in given array
Input format: Single row with multiple elements, separated by single space
Output format: Single row with elements in reversed order, separated by single space

*/

function implementationFn(inputLines) {
  const inputArray = inputLines[0].split(' ')

  for (let x = 0; x < inputArray.length; x++) {
    inputArray.splice(x, 0, inputArray.pop())
  }

  return inputArray.join(' ')
}

module.exports = {
  implementationFn
}
