const { BinarySearchTreeNode } = require('./BinarySearchTreeNode')

/*
A binary search tree is a binary tree in which for every node  all left branch descendents are equal or smaller than current node,
and all right branch descendents are larger than it.
*/

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  addChild(node) {
    if (!this.root) {
      this.root = node
    } else {
      this.root.addChild(node)
    }
  }

  addValue(value) {
    this.addChild(new BinarySearchTreeNode(value))
  }

  toString() {
    if (!this.root) {
      return '{}'
    }

    let result = ''
    const toStringVisitorFn = (node) => {
      result += `Node ${node.value}. Left: ${node.leftChild &&
        node.leftChild.value}. Right: ${node.rightChild && node.rightChild.value}\n`
    }
    this.root.preOrderTraversal(toStringVisitorFn)
    return result
  }
}

module.exports = {
  BinarySearchTree
}
