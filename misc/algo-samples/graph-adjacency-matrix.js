class Graph {
    constructor(numOfNodes, isDirected = false) {
        this.adjacencyMatrix = new Array(numOfNodes).fill(new Array(numOfNodes).fill(0));
        this.numOfNodes = numOfNodes;
        this.isDirected = isDirected;
    }

    addEdge(src, dest, weight = 1) {
        if(src >= numOfNodes || dest >= numOfNodes) {
            return `${src} or ${dest} is out of scope of this graph!`;
        }

        this.adjacencyList[src][dest] = weight;

        if(!this.isDirected) {
            this.adjacencyList[dest][src] = weight;
        }

        return `Edge has been successfully added`;
    }

    getNeighbors(vertex) {
        return this.adjacencyList[vertex];
    }

    getGraph() {
        return this.adjacencyMatrix;
    }
}