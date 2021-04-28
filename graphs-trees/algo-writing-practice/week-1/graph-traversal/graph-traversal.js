const {dfs, bfs} = require('./traversal-type')
const graphType = require('./graph-type');

export default function graphTraversal(graph, graphType, traversal, node) {
    if(!graph) return 'Please add a graph';
    if(!graphType) return 'Please add select a graph type';
    if(!traversal) return 'Please select a traversal type';
    if(!node) return 'Please add a node';

    let visited = [];
    let unvisited = [node];
    return traversal(graph, graphType, visited, unvisited);
}

/*
Take a node
Add all unvisited edges of node to a list
add current node as visited
go to next node
terminate when there are no more unvisited nodes
*/