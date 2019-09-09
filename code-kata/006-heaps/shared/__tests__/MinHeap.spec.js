const { MinHeap } = require('../MinHeap')

describe('MinHeap', () => {
  it('Correctly sorts elements', () => {
    const heap = new MinHeap()
    heap.insert(1)
    heap.insert(3)
    heap.insert(6)
    heap.insert(2)
    heap.insert(4)
    heap.insert(5)
    heap.insert(8)
    heap.insert(9)
    heap.insert(10)

    expect(heap.heap).toMatchSnapshot()
  })

  it('Correctly removes min element', () => {
    const heap = new MinHeap()
    heap.insert(1)
    heap.insert(3)
    heap.insert(6)
    heap.insert(2)
    heap.insert(4)
    heap.insert(5)
    heap.insert(8)
    heap.insert(9)
    heap.insert(10)

    const minValue = heap.extractMin()
    expect(minValue).toEqual(1)
    expect(heap.heap).toMatchSnapshot()
  })
})
