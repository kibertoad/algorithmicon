const { Graph } = require('../Graph')

describe('Graph', () => {
  it('Creates vertices and edges correctly', () => {
    const graph = new Graph()
    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')

    graph.addEdge('a', 'b')
    graph.addEdge('c', 'b')

    expect(graph.toString()).toMatchSnapshot()
  })

  it('Depth-first traversal', () => {})

  it('Breadth-first traversal', () => {})
})
