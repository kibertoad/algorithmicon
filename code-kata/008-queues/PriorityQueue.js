// User defined class
// to store element and its priority
class QElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

// PriorityQueue class
class PriorityQueue {
  constructor() {
    this.items = []
  }

  /**
   * Add element to the queue as per priority
   * @param element
   * @param {number} priority - lower number means higher priority
   */
  enqueue(element, priority) {
    // creating object from queue element
    const qElement = new QElement(element, priority)

    // iterating through the entire item array to add element at the correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Once the correct location is found it is enqueued
        this.items.splice(i, 0, qElement)
        return
      }
    }

    // if the element have the lowest priority
    // it is added at the end of the queue
    this.items.push(qElement)
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error('No elements left')
    }

    return this.items.shift()
  }

  /**
   * Returns the highest priority element in the Priority queue without removing it.
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }
}

module.exports = {
  PriorityQueue
}
