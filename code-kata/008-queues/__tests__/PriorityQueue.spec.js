const { PriorityQueue } = require('../PriorityQueue')

describe('PriorityQueue', () => {
  describe('remove', () => {
    it('retrieves and removes element with highest priority', () => {
      const queue = new PriorityQueue()
      queue.enqueue('C', 3)
      queue.enqueue('A', 1)
      queue.enqueue('B', 2)

      const a = queue.remove().element
      const b = queue.remove().element
      const c = queue.remove().element

      expect(a).toEqual('A')
      expect(b).toEqual('B')
      expect(c).toEqual('C')
    })
  })

  describe('remove', () => {
    it('retrieves element with highest priority without removing', () => {
      const queue = new PriorityQueue()
      queue.enqueue('C', 3)
      queue.enqueue('A', 1)
      queue.enqueue('B', 2)

      const a1 = queue.peek().element
      const a2 = queue.peek().element

      expect(a1).toEqual('A')
      expect(a2).toEqual('A')
    })
  })
})
