const { DoublyLinkedNode } = require('./DoublyLinkedNode')

class DoublyLinkedList {
  constructor() {
    this.head = null // First element of a list
  }

  get(index) {
    if (this.head === null) {
      throw new Error('Index out of bounds')
    }

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      if (currentNode.next === null) {
        throw new Error('Index out of bounds')
      }
      currentNode = currentNode.next
    }
    return currentNode.value
  }

  /**
   * Adds element to the end (tail) of the list
   */
  add(element) {
    const newNode = new DoublyLinkedNode(element)
    if (!this.head) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }

    newNode.addAfterNode(currentNode)
  }

  remove(element) {
    let currentNode = this.head

    while (currentNode !== null && currentNode.value !== element) {
      currentNode = currentNode.next
    }

    if (currentNode === this.head) {
      this.head = currentNode.next
    }

    if (currentNode) {
      currentNode.detach()
    }
  }
}

module.exports = {
  DoublyLinkedList
}
