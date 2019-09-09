/*

Node is called 'leaf' if it has no children.

 */

class TreeNode {
  constructor() {
    this.childNodes = []
  }

  addChild(child) {
    this.childNodes.push(child)
  }
}

module.exports = {
  TreeNode
}
