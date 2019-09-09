const { BinarySearchTreeNode } = require('./BinarySearchTreeNode')

/*
A binary search tree is a binary tree in which for every node  all left branch descendents are equal or smaller than current node,
and all right branch descendents are larger than it.
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  addChild(node) {
    if (!this.rootNode) {
      this.rootNode = node
    } else {
      this.rootNode.addChild(node)
    }
  }

  addValue(value) {
    this.addChild(new BinarySearchTreeNode(value))
  }

  toString() {
    if (!this.rootNode) {
      return '{}'
    }

    let result = ''
    const toStringVisitorFn = (node) => {
      result += `Node ${node.value}. Left: ${node.leftChild &&
        node.leftChild.value}. Right: ${node.rightChild && node.rightChild.value}\n`
    }
    this.rootNode.preOrderTraversal(toStringVisitorFn)
    return result
  }
}

module.exports = {
  BinarySearchTree
}
