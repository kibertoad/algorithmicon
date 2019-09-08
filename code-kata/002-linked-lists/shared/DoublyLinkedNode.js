class DoublyLinkedNode {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }

  addAfterNode(prevNode) {
    if (!prevNode) {
      throw new Error('No node provided')
    }

    if (prevNode.next) {
      prevNode.next.prev = this
    }

    this.prev = prevNode
    this.next = prevNode.next
    prevNode.next = this
  }

  detach() {
    if (this.prev) {
      this.prev.next = this.next
    }

    if (this.next) {
      this.next.prev = this.prev
    }
  }
}

module.exports = {
  DoublyLinkedNode
}
