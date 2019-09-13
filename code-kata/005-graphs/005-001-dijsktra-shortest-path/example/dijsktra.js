function implementationFn(inputLines) {
  const graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]]

  // Your implementation
  dijkstra(graph, 0)

}

// Function that implements Dijkstra's single source shortest path algorithm
// for a graph represented using adjacency matrix representation
function dijkstra(graph, sourceVertex) {
  let dist = {} // The output array.  dist[i] will hold the shortest
  // distance from src to i

  const sptSet = {} // sptSet[i] will be true if vertex i is included in shortest
  // path tree or shortest distance from src to i is finalized

  // Initialize all distances as INFINITE and stpSet[] as false
  for (let i = 0; i < V; i++)
    dist[i] = Number.MAX_VALUE, sptSet[i] = false

  // Distance of source vertex from itself is always 0
  dist[sourceVertex] = 0

  // Find shortest path for all vertices
  for (let count = 0; count < V - 1; count++) {
    // Pick the minimum distance vertex from the set of vertices not
    // yet processed. u is always equal to src in the first iteration.
    const u = minDistance(dist, sptSet)

    // Mark the picked vertex as processed
    sptSet[u] = true

    // Update dist value of the adjacent vertices of the picked vertex.
    for (let v = 0; v < V; v++)

      // Update dist[v] only if is not in sptSet, there is an edge from
      // u to v, and total weight of path from src to  v through u is
      // smaller than current value of dist[v]
      if (!sptSet[v] && graph[u][v] && dist[u] !== Number.MAX_VALUE
        && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
  }

  // print the constructed distance array
  printSolution(dist)
}

function printSolution(dist) {
  console.log('Vertex \t\t Distance from Source\n')
  for (let i = 0; i < V; i++)
    console.log('%d \t\t %d\n', i, dist[i])
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
