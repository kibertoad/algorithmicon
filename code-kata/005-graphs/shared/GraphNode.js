class GraphNode {
  constructor(id) {
    this.id = id
    this.connectedNodes = []
  }

  breadthFirstTraversal(visitorFn) {}

  depthFirstTraversal(visitorFn) {
    visitorFn(this)
    this.markNodeVisited()

    for (let n in this.connectedNodes) {
      const node = this.connectedNodes[n]
      if (!node.isNodeVisited()) {
        node.depthFirstTraversal(visitorFn)
      }
    }
  }

  markNodeVisited() {
    this.visited = true
  }

  isNodeVisited() {
    return this.visited
  }
}

module.exports = {
  GraphNode
}
