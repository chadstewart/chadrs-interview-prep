/*

var treeNode = {
    data: *some data*,
    left: *address of node*,
    right: *address of node*
}

*/

function dfs(root, searchType) {
    return searchType(root);
}

function inOrder(root, result = []) {

    if(root){
        inOrder(root.left, result);
        result.push(root.data);
        inOrder(root.right, result);
    }

    return result;
}

function postOrder(root, result = []) {

    if(root){
        postOrder(root.right, result);
        result.push(root.data);
        postOrder(root.left, result);
    }

    return result;
}

function preOrder(root, result = []) {

    if(root){
        result.push(root.data);
        preOrder(root.left, result);
        preOrder(root.right, result);
    }

    return result;
}