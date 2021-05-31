/*

var graphNode = {
    data = *some data*,
    neighbors = [*addresses of neighbors]
}

*/

function bfs(root) {
    let result = [];
    let visited = {};
    let toProcess = [];
    let current = root;

    while(current) {
        for(let neighbor of current.neighbors) {
            if(!visited[neighbor]) toProcess.push(neighbor);
        }

        result.push(current.data);
        visited[current] = true;
        current = toProcess.shift();
    }

    return result;
}