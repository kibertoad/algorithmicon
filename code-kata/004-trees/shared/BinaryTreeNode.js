const { TreeNode } = require('./TreeNode')

class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.leftChild = null
    this.rightChild = null
  }

  addChild(child) {
    throw new Error('not implemented')
  }

  addRight(child) {
    throw new Error('not implemented')
  }

  addLeft(child) {
    throw new Error('not implemented')
  }

  /**
   * Visit the left branch, then the current node, and finally, the right branch
   * When performed on a binary search tree, it visits the nodes in ascending order
   */
  inOrderTraversal(visitorFn) {
    if (this.leftChild) {
      this.leftChild.inOrderTraversal(visitorFn)
    }

    visitorFn(this)

    if (this.rightChild) {
      this.rightChild.inOrderTraversal(visitorFn)
    }
  }

  /**
   * Visit the current node, then left branch, then right branch.
   */
  preOrderTraversal(visitorFn) {
    visitorFn(this)

    if (this.leftChild) {
      this.leftChild.preOrderTraversal(visitorFn)
    }
    if (this.rightChild) {
      this.rightChild.preOrderTraversal(visitorFn)
    }
  }

  /**
   * Visit the left branch, then the right branch, and then the node itself.
   */
  postOrderTraversal(visitorFn) {
    if (this.leftChild) {
      this.leftChild.preOrderTraversal(visitorFn)
    }
    if (this.rightChild) {
      this.rightChild.preOrderTraversal(visitorFn)
    }
    visitorFn(this)
  }
}

module.exports = {
  BinaryTreeNode
}
