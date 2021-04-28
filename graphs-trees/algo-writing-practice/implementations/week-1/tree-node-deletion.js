function treeNodeDeletion(searchValue, graph) {
    if (!searchValue) return 'Please enter a value!';
    if (!graph) return 'Please enter a graph';

    let parentOfNodeToBeDeleted = dfs(searchValue, graph, inOrder);

    if(parentOfNodeToBeDeleted === null) return 'No node with that value was found';

    let nodeToBeDeleted = null;
    let whichChildOfParent = null;

    if(parentOfNodeToBeDeleted.left.value === searchValue) {
        nodeToBeDeleted = parentOfNodeToBeDeleted.left;
        whichChildOfParent = 'left';
    }

    if(parentOfNodeToBeDeleted.right.value === searchValue) {
        nodeToBeDeleted = parentOfNodeToBeDeleted.right;
        whichChildOfParent = 'right';
    }

    if(nodeToBeDeleted.left === null && nodeToBeDeleted.right === null) {
        deleteNodeNoChildren(parentOfNodeToBeDeleted, whichChildOfParent);
        return 0;
    }
    
    if(nodeToBeDeleted.left || nodeToBeDeleted.right) {
        if(nodeToBeDeleted.left) {
            deleteNodeOneChild(parentOfNodeToBeDeleted, whichChildOfParent, nodeToBeDeleted.left);
            return 0;
        }

        if(nodeToBeDeleted.right) {
            deleteNodeOneChild(parentOfNodeToBeDeleted, whichChildOfParent, nodeToBeDeleted.right)
            return 0;
        };
    }

    if(nodeToBeDeleted.left && nodeToBeDeleted.right) {
        let parentNode = currentNode;
        let currentNode = nodeToBeDeleted.left;

        while(currentNode.right) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        }

        if(currentNode.left === null && currentNode.right === null) {
            swapAndDelete(currentNode, nodeToBeDeleted, parentOfNodeToBeDeleted, whichChildOfParent);
        }

        if(currentNode.left || currentNode.right) {
            if(currentNode.left) {
                parentNode = currentNode.left;
                swapAndDelete(currentNode, nodeToBeDeleted, parentOfNodeToBeDeleted, whichChildOfParent);
            }

            if(currentNode.right) {
                parentNode = currentNode.right;
                swapAndDelete(currentNode, nodeToBeDeleted, parentOfNodeToBeDeleted, whichChildOfParent);
            }
        }

        return 0;
    }
}

function swapAndDelete(nodeToBeSwapped, nodeToBeDeleted, parentOfNodeToBeDeleted, whichChild) {
    nodeToBeSwapped.left = nodeToBeDeleted.left;
    nodeToBeSwapped.right = nodeToBeDeleted.right;
    parentOfNodeToBeDeleted[whichChild] = nodeToBeSwapped;
    nodeToBeDeleted.left = nodeToBeDeleted.right = null;
    nodeToBeDeleted = null;
}

function deleteNodeNoChildren(parentNode, child) {
    return parentNode[child] = null;
}

function deleteNodeOneChild(parentNode, whichChild, childNode) {
    return parentNode[whichChild] = childNode;
}

function dfs(searchValue, graph, searchType) {
    let currentNode = graph.head;
    if (!currentNode) return -1;
    return searchType(currentNode, searchValue);
}

function inOrder(node, searchValue) {
    if(node.left.value === searchValue) return node;
    if(node.right.value === searchValue) return node;
    if(!node) return null;
    let result = null;

    if (node) {
        result = inOrder(node.left);
        if(result === null) result = inOrder(node.right);
    }

    return result;
}