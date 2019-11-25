class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  /**
   * Return top element and remove it from stack
   */
  pop() {
    if (this.items.length === 0) {
      throw new Error('No elements left')
    }
    return this.items.pop()
  }

  /**
   * Return top element without removing
   */
  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length == 0
  }
}

module.exports = {
  Stack
}
