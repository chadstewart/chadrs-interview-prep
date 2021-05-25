function bfs(root) {
    let queue = [root];
    let result = [];

    while(queue.length) {
        let currentNode = queue.shift();
        currentNode.left && queue.push(currentNode.left);
        currentNode.right && queue.push(currentNode.right);
        result.push(currentNode.value);
    }

    return result;
}

function dfs(root, searchType = 'inOrder') {
    let result = [];

    let inOrder = node => {
        inOrder(node.left);
        result.push(node.value);
        inOrder(node.right);
    }

    let preOrder = node => {
        result.push(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }

    let postOrder = node => {
        postOrder(node.left);
        postOrder(node.right);
        result.push(node.value);
    }

    switch (searchType) {
        case 'inOrder':
            inOrder(root);
            break;

        case 'preOrder':
            preOrder(root);
            break;

        case 'postOrder':
            postOrder(root);
            break;
    }

    return result;
}