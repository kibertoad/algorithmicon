const { Trie } = require('../Trie')

describe('Trie', () => {
  it('contains works correctly', () => {
    const trie = new Trie()
    trie.insert('mars')
    trie.insert('venus')

    expect(trie.contains('mars')).toEqual(true)
    expect(trie.contains('uranus')).toEqual(false)
  })

  it('find works correctly', () => {
    const trie = new Trie()
    trie.insert('mars')
    trie.insert('martian')
    trie.insert('venus')

    expect(trie.find('mar')).toEqual(['martian', 'mars'])
    expect(trie.find('mart')).toEqual(['martian'])
    expect(trie.find('marty')).toEqual([])
  })

  it('finds overlapping words correctly', () => {
    const trie = new Trie()
    trie.insert('many')
    trie.insert('man')
    trie.insert('maker')

    expect(trie.find('man')).toEqual(['many', 'man'])
  })
})
