function bfs(root, result) {
    let unvisited = [root, '*'];

    while(unvisited.length > 1) {
        currentNode = unvisited.pop();
        
        if(currentNode === '*') {
            unvisited.push('*');
            continue;
        }

        if(currentNode.left) unvisited.push(currentNode.left);
        if(currentNode.right) unvisited.push(currentNode.right);

        result.push(currentNode);
    }
}

function inOrder(root, result) {
    if(root) {
        inOrder(root.left, result);
        result.push(root);
        inOrder(root.right);
    }
}

function preOrder(root, result) {
    if(root) {
        result.push(root);
        preOrder(root.left, result);
        preOrder(root.right);
    }
}

function postOrder(root, result) {
    if(root) {
        postOrder(root.left, result);
        postOrder(root.right);
        result.push(root);
    }
}

traversalType = {
    bfs: bfs,
    dfsInOrder: inOrder,
    dfsPreOrder: preOrder,
    dfsPostOrder: postOrder
}

module.exports = traversalType;