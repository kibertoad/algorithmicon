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

  it('Depth-first traversal', () => {
    const graph = new Graph()
    graph.addVertex('a')
    graph.addVertex('a1')
    graph.addVertex('a2')
    graph.addVertex('b')
    graph.addVertex('b1')
    graph.addVertex('b2')
    graph.addVertex('c')
    graph.addVertex('c1')

    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('a', 'a1')
    graph.addEdge('a', 'a2')
    graph.addEdge('b', 'b1')
    graph.addEdge('b', 'b2')
    graph.addEdge('c', 'c1')

    const path = []
    const travellerFn = (node) => {
      path.push(node)
    }

    graph.depthFirstTraversal(travellerFn, 'a')

    expect(path).toEqual(['a', 'b', 'b1', 'b2', 'c', 'c1', 'a1', 'a2'])
  })

  it('Breadth-first traversal', () => {
    const graph = new Graph()
    graph.addVertex('a')
    graph.addVertex('a1')
    graph.addVertex('a2')
    graph.addVertex('b')
    graph.addVertex('b1')
    graph.addVertex('b2')
    graph.addVertex('c')
    graph.addVertex('c1')

    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('a', 'a1')
    graph.addEdge('a', 'a2')
    graph.addEdge('b', 'b1')
    graph.addEdge('b', 'b2')
    graph.addEdge('c', 'c1')

    const path = []
    const travellerFn = (node) => {
      path.push(node)
    }

    graph.breadthFirstTraversal(travellerFn, 'a')

    expect(path).toEqual(['a', 'b', 'c', 'a1', 'a2', 'b1', 'b2', 'c1'])
  })
})
