const { DoublyLinkedList } = require('../shared/DoublyLinkedList')

function implementationFn(inputLines) {
  const inputArray = inputLines[0].split(' ')
  const linkedList = DoublyLinkedList.fromArray(inputArray)

  let fastPointer = linkedList.head.next
  let slowPointer = linkedList.head

  // There are only two elements in the list, nothing to do
  if (!fastPointer.next) {
    return linkedList.toArray().join(' ')
  }

  while (fastPointer) {
    fastPointer = fastPointer.next
    if (fastPointer) {
      fastPointer = fastPointer.next
    }

    slowPointer = slowPointer.next
  }

  // If fastPointer has reached the end of the list,
  // this means that slowPointer has reached the second half of the list, we can start weaving from there
  fastPointer = linkedList.head
  slowPointer = slowPointer.next

  // Note that we don't need to move last element in the list, so we don't need to handle case of
  // somehow reaching last element after slowPointer becoming null
  while (slowPointer !== null) {
    const nodeToWeave = slowPointer.prev
    nodeToWeave.addAfterNode(fastPointer)
    slowPointer = slowPointer.next
    fastPointer = nodeToWeave.next
  }

  return linkedList.toArray().join(' ')
}

module.exports = {
  implementationFn
}
