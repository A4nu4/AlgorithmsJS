class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    // check if there is vertex in adjacencyList, and if there is not, then add it
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    // push vertex2 into vertex1
    this.adjacencyList[vertex1].push(vertex2);
    // push vertex1 into vertex2
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    // filter vertex2 values from vertex1
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    // filter vertex1 values from vertex2
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }
  removeVertex(vertex) {
    // loop over adjacencyList until vertex has no adjacent vertices
    while (this.adjacencyList[vertex].length) {
      // remove last adjacent vertex from adjacencyList
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // remove edge between vertex and its adjacent vertex
      this.removeEdge(vertex, adjacentVertex);
    }
    // remove vertex from adjacencyList
    delete this.adjacencyList[vertex];
  }
}

var graph = new Graph();

console.log("ADD VERTEX:");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
console.log(graph);

console.log("\nADD EDGE:");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
console.log(graph);

console.log("\nREMOVE EDGE:");
graph.removeEdge("B", "A");
graph.removeEdge("C", "D");
console.log(graph);

console.log("\nREMOVE VERTEX:");
graph.removeVertex("C");
graph.removeVertex("B");
console.log(graph);
