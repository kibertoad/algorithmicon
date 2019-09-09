/**
 * A min-heap is a complete binary tree where each node is smaller than its children.
 * The most common approach is to store the heap in an array.
 * The parent and children of each node can be found by simple calculations.
 */
class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value) // We start insertion by adding new element to the bottom, at the rightmost position
    this._bubbleUp()
  }

  /**
   * Removes the smallest element from a heap and returns it.
   */
  extractMin() {
    const minValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._sinkDown(0)
    return minValue
  }

  // Invert all heap (not length!) comparisons for MaxHeap
  _sinkDown(index) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    const length = this.heap.length
    let smallest = index

    // if left child is smaller than parent
    if (left <= length && this.heap[left] < this.heap[smallest]) {
      smallest = left
    }
    // if right child is smaller than parent
    if (right <= length && this.heap[right] < this.heap[smallest]) {
      smallest = right
    }
    // swap
    if (smallest !== index) {
      const smallestValue = this.heap[smallest]
      this.heap[smallest] = this.heap[index]
      this.heap[index] = smallestValue
      this._sinkDown(smallest)
    }
  }

  _bubbleUp() {
    let index = this.heap.length - 1 // index of the last element

    while (index > 0) {
      const element = this.heap[index]
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      // We've reached desired state, heap is properly sorted now
      // Invert this check for MaxHeap
      if (parent <= element) break

      // Swap elements
      this.heap[index] = parent
      this.heap[parentIndex] = element

      // Move up to see if further swapping is neede
      index = parentIndex
    }
  }
}

module.exports = {
  MinHeap
}
