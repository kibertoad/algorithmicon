const { BinarySearchTree } = require('../BinarySearchTree')
const { BinarySearchTreeNode } = require('../BinarySearchTreeNode.js')

describe('BinarySearchTree', () => {
  it('correctly adds new element', () => {
    const tree = new BinarySearchTree()
    tree.addValue(70)
    tree.addValue(75)
    tree.addValue(40)
    tree.addValue(20)
    tree.addValue(60)
    tree.addValue(80)
    tree.addValue(90)

    expect(tree.toString()).toMatchSnapshot()
  })

  it('in-order traversal', () => {})
})
