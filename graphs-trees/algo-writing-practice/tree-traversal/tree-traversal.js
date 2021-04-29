const traversalType = require('./traversal-type');

function treeTraversal (root, traversal) {
    if(!root) return 'Please add a root node';
    if(!traversal) return 'Please add a traversal type';
    
    let result = [];
    traversal(root, result);
    return result;
}