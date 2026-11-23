class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }
  depthFirstSearchRecursive(start) {
    // create empty Array to store result
    const result = [];
    // create empty Object
    const visited = {};
    // create list
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      // check if vertex is null and return null
      if (!vertex) return null;
      // mark as visited
      visited[vertex] = true;
      // push vertex to result
      result.push(vertex);
      // go through each vertex
      adjacencyList[vertex].forEach((neighbor) => {
        // check if neighbor is not visited
        if (!visited[neighbor]) {
          // recursive call
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  depthFirstSearchIterative(start) {
    // create empty Array to store result
    const result = [];
    // create stack to keep track of vertices
    const stack = [start];
    // create empty object
    const visited = {};
    // create variable to store current vertex
    let currentVertex;

    // mark visited at start
    visited[start] = true;
    console.log(visited);

    // create while loop until it stack is null
    while (stack.length) {
      currentVertex = stack.pop();
      // push current vertex to result
      result.push(currentVertex);

      // go through adjacencyList
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // check neighbor is not visited
        if (!visited[neighbor]) {
          // set it to true
          visited[neighbor] = true;
          // push neighbor to stack
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirstSearch(start) {
    // create empty array for storing result
    const result = [];
    // create queue and add start
    const queue = [start];
    // create empty object to store visited vertices
    const visited = {};

    // mark start as visited
    visited[start] = true;

    // implement while loop until queue is null
    while (queue.length) {
      // remove first vertex from queue
      const firstVertex = queue.shift();
      // push vertices to result array
      result.push(firstVertex);
      // add it to visited
      visited[firstVertex] = true;
      // go through each neighbor of current vertex
      this.adjacencyList[firstVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          // mark neighbor as visited
          visited[neighbor] = true;
          // add neighbor to queue
          queue.push(neighbor);
        }
      });
    }
    // return result
    return result;
  }
}

var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");
graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");
console.log(graph);

console.log("\nRECURSIVE DFS:");
console.log(graph.depthFirstSearchRecursive("S"));

console.log("\nITERATIVE DFS:");
console.log(graph.depthFirstSearchIterative("S"));

console.log("\nBFS:");
console.log(graph.breadthFirstSearch("S"));
