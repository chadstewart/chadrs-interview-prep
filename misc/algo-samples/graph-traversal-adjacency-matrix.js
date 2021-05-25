function bfs(graph, src) {
    let queue = [src];
    let visited = [];

    let getUnvisited = node => {
        let temp = graph.getNeighbors(node);
        let result = [];

        for(let i = 0; i < temp.length; i++) {
            if(temp[i] > 0 && !visited.includes(i)) {
                result.push(temp[i]);
            }
        }

        return result;
    };

    while(queue.length) {
        let currentNode = queue.shift();
        queue = queue.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];

    let getUnvisited = node => {
        let temp = graph.getNeighbors(node);
        let result = [];

        for(let i = 0; i < temp.length; i++) {
            if(temp[i] > 0 && !visited.includes(i)) {
                result.push(temp[i]);
            }
        }

        return result;
    };

    while(stack.length) {
        let currentNode = stack.pop();
        stack = stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}