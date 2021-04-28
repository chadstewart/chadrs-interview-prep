// Implement a Graph
// basic operations:
//  - add vertex (node)
//  - add edge (node -> node)

function GraphNode(val) {
    this.val = val;
    this.edges = {};
  }
  
  function Graph() {
    this.vertices = {};
  }
  
  // O(1) operation
  Graph.prototype.addVertex = function(val) {
    // add vertex only if it does not exist.
    if (!this.vertices[val]) {
      this.vertices[val] = new GraphNode(val);
    }
  };
  
  // O(E) operation - edges
  Graph.prototype.removeVertex = function(val) {
    if (this.vertices[val]) {
      // once you remove a vertex, you need to remove all edges pointing
      // to the vertex.
      delete this.vertices[val];
      
      Object.keys(this.vertices).forEach(function(key, index) {
        if (this.vertices[key].edges[val]) {
          delete this.vertices[key].edges[val];
        }
      }.bind(this));
    }
  };
  
  // O(1) operation
  Graph.prototype.getVertex = function(val) {
    return this.vertices[val];
  };
  
  // O(1) operation
  Graph.prototype.addEdge = function(start, end) {
    // check to see if vertices exists.
    // if it exists, set the edges and be done.
    if (this.vertices[start] && this.vertices[end]) {
      
      // check to see if edge exists, if it does, increment it's weight
      if (this.vertices[start].edges[end]) {
        this.vertices[start].edges[end].weight += 1;
      } else {
        
        // edge does not exist, set weight to 1.
        this.vertices[start].edges[end] = { weight: 1 };
      }
    }
  };
  
  // O(1) operation
  Graph.prototype.removeEdge = function(start, end) {
    if (this.vertices[start] && this.vertices[end]) {
      if (this.vertices[start].edges[end]) {
        delete this.vertices[start].edges[end];
      }
    }
  };
  
  // O(1) operation
  Graph.prototype.getEdge = function(start, end) {
    return this.vertices[start].edges[end] || null;
  };
  
  
  Graph.prototype.neighbors = function(val) {
    return this.vertices[val] ? this.vertices[val].edges : null;
  };
  
  var graph = new Graph();
  
  graph.addVertex(5);
  graph.addVertex(2);
  graph.addVertex(6);
  graph.addVertex(7);
  graph.addEdge(2, 5);
  graph.addEdge(6, 7);
  graph.addEdge(7, 5);
  console.log(graph.getEdge(2, 5));
  console.log(graph.getEdge(6, 7));
  graph.removeVertex(5);
  console.log(graph.getEdge(2, 5));
  console.log(graph.neighbors(6));
  console.log(graph.neighbors(5));