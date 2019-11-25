const { Stack } = require('../Stack')

describe('Stack', () => {
  describe('pop', () => {
    it('retrieves and removes top element', () => {
      const stack = new Stack()
      stack.push('A')
      stack.push('B')
      stack.push('C')

      const c = stack.pop()
      const b = stack.pop()
      const a = stack.pop()

      expect(a).toEqual('A')
      expect(b).toEqual('B')
      expect(c).toEqual('C')
    })
  })

  describe('peek', () => {
    it('retrieves top element without removing', () => {
      const stack = new Stack()
      stack.push('A')
      stack.push('B')
      stack.push('C')

      const c1 = stack.peek()
      const c2 = stack.peek()

      expect(c1).toEqual('C')
      expect(c2).toEqual('C')
    })
  })
})
