function bfs(graph, src) {
    let queue = [src];
    let visited = [];

    const getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    };

    while(queue.length) {
        let currentNode = queue.shift();
        queue.push(getUnvisited(currentNode));
        visited.push(currentNode.value);
    }

    return visited;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];

    const getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    };

    while(stack.length) {
        let currentNode = stack.pop();
        stack.push(getUnvisited(currentNode));
        visited.push(currentNode.value);
    }

    return visited;
}