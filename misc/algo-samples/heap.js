class Heap {
    constructor() {
        this.heap = [];
    }

    getParent(node) {
        return node === 0 ? null : Math.floor((node - 1) / 2);
    }

    getLeftChild(node) {
        let result = (2 * node) + 1;
        return result >= this.heap.length ? null : result;
    }

    getRightChild(node) {
        let result = (2 * node) + 2;
        return result >= this.heap.length ? null : result;
    }

    getChildren(node) {
        return [getLeftChild(node), getRightChild(node)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let currentNode = this.heap.length - 1;
        let parent = getParent(currentNode);

        while(parent) {
            if(this.heap[currentNode] < this.heap[parent]) {
                this.swap(currentNode, parent);
            } else {
                break;
            }

            currentNode = parent;
            parent = getParent(currentNode);
        }

        return `Heapified!`;
    }

    heapifyDown() {
        let currentNode = 0;
        let children = getChildren(currentNode);

        while(children[0]) {
            if(this.heap[currentNode] > this.heap[children[0]] || 
               this.heap[currentNode] > this.heap[children[1]]) {
                    if(!this.heap[children[1]] ||
                       this.heap[children[0]] <= this.heap[children[1]]) {
                        this.swap(currentNode, children[0]);
                        currentNode = children[0];
                    } else {
                        this.swap(currentNode, children[1]);
                        currentNode = children[1];
                    }
               } else {
                    break;
               }

            children = getChildren[currentNode];
        }

        return `Heapified!`;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
        return `Value ${value} has been successfully inserted into heap!`;
    }

    getMin() {
        this.swap(0, this.heap.length - 1);
        let result = this.heap.pop();
        this.heapifyDown();
        return result;
    }
}

module.exports = Heap;