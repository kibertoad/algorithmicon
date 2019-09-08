/*

Difficulty: Easy (4)
Problem statement: Given a list of elements, rearrange them so that first half of the array is shifted to occupy odd
positions in the list, and second half is shifted to occupy even positions in the array
(a_1 ->a_2 -> ... ->a_n ->b_1 ->b_2 -> ... ->b_n
into
 a_1 ->b_1 ->a_2 ->b_2 -> ... ->a_n ->b_n)

Input format: Single row with multiple elements, separated by single space
Output format: Single row with multiple element, ordered by specified rules, separated by single space

*/

function implementationFn(inputLines) {
  const inputArray = inputLines[0].split(' ')
  const linkedList = DoublyLinkedList.fromArray(inputArray)

  // Your implementation

  return linkedList
}

module.exports = {
  implementationFn
}
