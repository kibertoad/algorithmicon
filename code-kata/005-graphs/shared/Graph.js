class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  /**
   * Add vertex (node) without any connections to adjacency list
   */
  addVertex(vertex) {
    this.adjacencyList.set(vertex, [])
  }

  /**
   * Add edge (connection) between two vertices
   */
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2)

    // Since graph is undirected, add second edge
    this.adjacencyList.get(vertex2).push(vertex1)
  }

  breadthFirstTraversal(visitorFn, vertex) {
    const visitedMap = {}
    const queue = []

    queue.push(vertex)
    visitorFn(vertex)
    visitedMap[vertex] = true
    while (queue.length) {
      const currentVertex = queue.shift() // Remove from the front of the queue
      const edges = this.adjacencyList.get(currentVertex)
      for (let i in edges) {
        const neighborToVisit = edges[i]

        if (!visitedMap[neighborToVisit]) {
          visitorFn(neighborToVisit)
          visitedMap[neighborToVisit] = true
          queue.push(neighborToVisit)
        }
      }
    }
  }

  depthFirstTraversal(visitorFn, vertex, visitedMap = {}) {
    visitorFn(vertex)
    visitedMap = visitedMap || {}
    visitedMap[vertex] = true

    const edges = this.adjacencyList.get(vertex)
    for (let i in edges) {
      const neighborToVisit = edges[i]
      if (!visitedMap[neighborToVisit]) {
        this.depthFirstTraversal(visitorFn, neighborToVisit, visitedMap)
      }
    }
  }

  toString() {
    const keys = this.adjacencyList.keys()
    let result = ''

    // iterate over the vertices
    for (let vertexKey of keys) {
      // great the corresponding adjacency list
      // for the vertex
      const vertexEdges = this.adjacencyList.get(vertexKey)
      let edgesAsText = ''

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let vertexEdge of vertexEdges) {
        edgesAsText += vertexEdge + ' '
      }

      result += vertexKey + ' -> ' + edgesAsText + '\n'
    }
    return result
  }
}

module.exports = {
  Graph
}
