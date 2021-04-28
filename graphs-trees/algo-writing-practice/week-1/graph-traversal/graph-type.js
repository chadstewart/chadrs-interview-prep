function getUnvisitedNodesAdjList(graph, node, visited) {
    let edges = graph.getEdges(node);    
    return edges.filter(node => !visited.includes(node));
}

function getUnvisitedNodesFastAdjList(graph, node, visited) {
    let edges = graph.getEdges(node);    
    let visitedHash = {};
    let unvisitedNodes;

    for(let i = 0; i < visited.length; i++) {
        visitedHash[visited[i]] = true;
    }

    for(let i = 0; i < edges; i++) {
        if(!visitedHash[edge[i]]) unvisitedNodes.push(edge[i]);
    }

    return unvisitedNodes;
}

function getUnvisitedNodesAdjMatrix(graph, node, visited) {    
    let edges = graph[node].filter(edge => edge > 0);
    edges = edges.filter(node => !visited.includes(node));
    return edges;
}

function getUnvisitedNodesFastAdjMatrix(graph, node, visited) {
    let visitedHash = {};
    let unvisitedNodes;

    for(let i = 0; i < visited.length; i++) {
        visitedHash[visited[i]] = true;
    }

    for(let i = 0; i < graph[node]; i++) {
        if(graph[node][i] > 0 && !visitedHash[i]) unvisitedNodes.push(i);
    }

    return unvisitedNodes;
}

let graphType = {
    adjList: getUnvisitedNodesAdjList,
    adjMatrix: getUnvisitedNodesAdjMatrix,
    adjListFast: getUnvisitedNodesFastAdjList,
    adjMatrixFast: getUnvisitedNodesFastAdjMatrix
};

module.exports = graphType;