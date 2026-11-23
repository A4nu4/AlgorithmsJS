class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  numEdges() {
    let total = 0;

    Object.values(this.adjacencyList).forEach((list) => {
      total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // build up distances
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        // start is first in the queue with a distance of 0
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        // everyone else go to the bottom with infinity priority
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // initialize each previous at null
      previous[vertex] = null;
    }

    // as long as there is something in the fringe
    while (nodes.values.length) {
      // take out the first value in the Q
      smallest = nodes.dequeue().val;

      // all done?
      if (smallest === finish) {
        // build up the array of previously visited nodes
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // go through each node in the adjacency list
          let nextNode = this.adjacencyList[smallest][neighbor];

          // calculate current distance and the weight
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          // if the distance is less than what is currently stored?
          if (candidate < distances[nextNeighbor]) {
            // update with new lower distance
            distances[nextNeighbor] = candidate;
            // update previous to be new value
            previous[nextNeighbor] = smallest;
            // enqueue the future node with its new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

console.log(g.Dijkstra("A", "E"));
console.log(g.Dijkstra("A", "Q"));
console.log(g.Dijkstra("A", "G"));
console.log(g.Dijkstra("A", "D"));
