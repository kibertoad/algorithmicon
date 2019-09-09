const { DoublyLinkedList } = require('../DoublyLinkedList')

describe('DoublyLinkedList', () => {
  describe('add', () => {
    it('correctly adds element to empty list', () => {
      const list = new DoublyLinkedList()
      list.add(10)
      expect(list.get(0)).toEqual(10)
    })

    it('correctly adds element to not empty list', () => {
      const list = new DoublyLinkedList()
      list.add(10)
      list.add(20)
      list.add(30)
      list.add(40)
      expect(list.get(2)).toEqual(30)
    })
  })

  describe('add', () => {
    it('correctly removes only element', () => {
      const list = new DoublyLinkedList()
      list.add(10)
      list.remove(10)
      expect(list.head).toEqual(null)
    })

    it('correctly remove middle element', () => {
      const list = new DoublyLinkedList()
      list.add(10)
      list.add(20)
      list.add(30)
      list.add(40)
      list.remove(30)
      expect(list.get(2)).toEqual(40)
    })
  })
})
