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

  it('Calculates parent index correctly', () => {
    // assume heap of:
    //      0
    //   1     2
    //  3 4   5 6

    const parentIndex = MinHeap._calculateParentIndex(5)
    const index = 5
    const expectedParentIndex = Math.floor((index - 1) / 2)

    expect(parentIndex).toEqual(expectedParentIndex)
  })

  it('Calculates left child index correctly', () => {
    // assume heap of:
    //      0
    //   1     2
    //  3 4   5 6

    const childIndex = MinHeap._calculateLeftChildIndex(2)
    const index = 2
    const expectedChildIndex = index * 2 + 1

    expect(childIndex).toEqual(expectedChildIndex)
  })

  it('Calculates right child index correctly', () => {
    // assume heap of:
    //      0
    //   1     2
    //  3 4   5 6

    const childIndex = MinHeap._calculateRightChildIndex(2)
    const index = 2
    const expectedChildIndex = index * 2 + 2

    expect(childIndex).toEqual(expectedChildIndex)
  })
})
