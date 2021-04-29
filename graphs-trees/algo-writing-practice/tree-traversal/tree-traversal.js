const traversalType = require('./traversal-type');

function treeTraversal (root, traversal) {
    let result = [];
    traversal(root, result);
    return result;
}