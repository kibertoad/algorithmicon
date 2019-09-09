const { BinaryTreeNode } = require('./BinaryTreeNode')

class BinarySearchTreeNode extends BinaryTreeNode {
  addChild(child) {
    if (child.value > this.value) {
      this.addRight(child)
    } else {
      this.addLeft(child)
    }
  }

  addLeft(child) {
    if (!this.leftChild) {
      this.leftChild = child
      return
    }

    this.leftChild.addChild(child)
  }

  addRight(child) {
    if (!this.rightChild) {
      this.rightChild = child
      return
    }

    this.rightChild.addChild(child)
  }
}

module.exports = {
  BinarySearchTreeNode
}
