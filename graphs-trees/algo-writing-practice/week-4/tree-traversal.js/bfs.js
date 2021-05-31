/*

var treeNode = {
    data = *some data,
    left = *address of node*,
    right = *address of node*
}

*/

function bfs(root) {
    let toProcess = [root, '*'];
    let result = [];

    while(toProcess.length > 0) {
        let current = toProcess.shift();

        if(current === '*') {
            toProcess.push('*');
        }

        if(current.left !== null) toProcess.push(current.left);
        if(current.right !== null) toProcess.push(current.right);

        result.push(current.data);
    }

    return result;
}