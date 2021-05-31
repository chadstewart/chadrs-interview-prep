function dfs(graph, visited, unvisited, getUnvisitedNodes) {
    let currentNode;

    while (unvisited.length !== 0) {
        currentNode = unvisited.pop();
        unvisited = unvisited.concat(getUnvisitedNodes(graph, currentNode, visited));
        visited.push(currentNode);
    }

    return visited;
}

function bfs(graph, visited, unvisited, getUnvisitedNodes) {
    let currentNode;

    while (unvisited.length !== 0) {
        currentNode = unvisited.shift();
        unvisited = unvisited.concat(getUnvisitedNodes(graph, currentNode, visited));
        visited.push(currentNode);
    }

    return visited;
}

module.exports = {
    dfs,
    bfs
};