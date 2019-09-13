/*

Difficulty: Average (6)
Problem statement: Given a graph and a source vertex in the graph, find shortest paths from source to all vertices in the given graph.

Input format: Multiple rows (one row per vertex), where each number column is distance towards vertex with row index equivalent to the column index or 0 if vertex is not reachable.
Output format: Multiple rows (one row per vertex), where first number is a row index of vertex, and second number is shortest distance from the first vertex

*/

function implementationFn(inputLines) {
  const vertices = inputLines.shift().split(' ')
  const edges = inputLines.map((inputLine) => {})

  const graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
  ]

  // Your implementation
  return dijkstra(graph, 0)
}

// Function that implements Dijkstra's single source shortest path algorithm
// for a graph represented using adjacency matrix representation
function dijkstra(graph, sourceVertex) {
  let dist = {} // The output array.  dist[i] will hold the shortest
  // distance from src to i

  const sptSet = {} // sptSet[i] will be true if vertex i is included in shortest
  // path tree or shortest distance from src to i is finalized

  // Initialize all distances as INFINITE and stpSet[] as false
  for (let i = 0; i < graph.length; i++) (dist[i] = Number.MAX_VALUE), (sptSet[i] = false)

  // Distance of source vertex from itself is always 0
  dist[sourceVertex] = 0

  // Find shortest path for all vertices
  for (let count = 0; count < graph.length - 1; count++) {
    // Pick the minimum distance vertex from the set of vertices not
    // yet processed. u is always equal to src in the first iteration.
    const u = minDistance(graph.length, dist, sptSet)

    // Mark the picked vertex as processed
    sptSet[u] = true

    // Update dist value of the adjacent vertices of the picked vertex.
    for (let v = 0; v < graph.length; v++)
      // Update dist[v] only if is not in sptSet, there is an edge from
      // u to v, and total weight of path from src to  v through u is
      // smaller than current value of dist[v]
      if (
        !sptSet[v] &&
        graph[u][v] &&
        dist[u] !== Number.MAX_VALUE &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v]
      }
  }

  const result = []
  for (let vertixIndex in Object.keys(dist)) {
    const distance = dist[vertixIndex]
    result.push(`${vertixIndex} ${distance}`)
  }
  return result
}

function minDistance(numberOfVertices, distances, shortestPathTree) {
  // Initialize min value
  let min = Number.MAX_VALUE
  let minIndex

  for (let v = 0; v < numberOfVertices; v++)
    if (shortestPathTree[v] === false && distances[v] <= min) {
      min = distances[v]
      minIndex = v
    }

  return minIndex
}

module.exports = {
  implementationFn
}
