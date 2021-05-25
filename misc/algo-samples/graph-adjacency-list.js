class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if(this.root === null) {
            this.root = new LinkedListNode(value);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(value === currentNode.value) {
                    return `${value} already exists in this list!`;
                }
                
                if(currentNode.next) {
                    currentNode = currentNode.next;
                } else {
                    currentNode.next = new LinkedListNode(value);
                    break;
                }
            }
        }

        return `${value} was successfully inserted into the list!`;
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(value === currentNode.value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return `${value} was not found in this list!`;
    }

    returnList() {
        let result = [];
        let currentNode = this.root;

        while(currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    delete(value) {
        let deleteFlag = false;

        if(this.root.value === value) {
            this.root = this.root.next;
            deleteFlag = true;
        }

        let currentNode = this.root;

        while(currentNode.next) {
            if(currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                deleteFlag = true;
            }

            currentNode = currentNode.next;
        }

        if(deleteFlag) {
            return `${value} was successfully deleted!`
        } else {
            return `${value} was not found in this list!`;
        }
    }

    reverseList() {
        let currentNode = this.root;
        let next = null;
        let prev = null;

        while(currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
    }
}

class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if(this.adjacencyList.get(vertex)) {
            return `${vertex} already exists in this graph!`;
        }

        this.adjacencyList.set(vertex, new LinkedList());
        return `Vertex ${vertex} has been added!`; 
    }

    addEdge(src, dest) {
        if(!this.adjacencyList.get(src)) {
            this.addVertex(src);
        }

        if(!this.adjacencyList.get(dest)) {
            this.addVertex(dest);
        }

        this.adjacencyList.get(src).insert(dest);

        if(!isDirected) {
            this.adjacencyList.get(dest).insert(src);
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex).returnList();
    }

    getAllKeys() {
        let result = [];

        for(let i of this.adjacencyList.keys()) {
            result.push(i.value);
        }

        return result;
    }
}