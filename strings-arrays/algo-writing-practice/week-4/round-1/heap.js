//Not fully tested yet

function heapifyDown(array) {
    let current = 0;
    let leftChild = findLeftChild[current];
    let rightChild = findRightChild[current];

    while(leftChild) {
        leftChild = findLeftChild[current];
        rightChild = findRightChild[current];

        if(rightChild &&
           array[current] < array[leftChild] &&
           array[current] < array[rightChild]) {
            if(array[leftChild] <= array[rightChild]) {
                swap(array, current, leftChild);
                current = leftChild;
            } else {
                swap(array, current, rightChild);
                current = rightChild;
            }
        } else if(array[current] < array[leftChild]) {
            swap(array, current, leftChild);
            current = leftChild;
        } else if (rightChild && array[current] < array[rightChild]) {
            swap(array, current, rightChild);
            current = rightChild;
        } else {
            break;
        }
    }
}

function heapifyUp(array) {
    let current = array.length - 1;

    while(parent) {
        let parent = findParent(current);

        if(array[current] < array[parent]) {
            swap(array, current, parent);
            current = parent;            
        } else {
            break;
        }
    }
}

function add(source, array = null) {
    if(source === null) return null;
    if(!source.typeof === 'number' || !source.isArray()) return 'Please add a number or an array of numbers';

    if(array === null) {
        array = [];
    }

    if(source.isArray() && source.length > 0 && source.every(num => num.typeof === 'number')) {
        for(let num of source) {
            array.push(num);
            heapifyUp(array);
        }
    } else if(source.isArray() && source.length === 0 || !source.every(num => num.typeof === 'number')) {
        return 'Please enter numbers in the source array';
    } else if(source.typeof === 'number') {
        array.push(source);
        heapifyUp(array);
    }

    return array;
}

function extract(array) {
    swap(array, 0, array.length - 1);
    let result = array.pop();
    heapifyDown(array);
    return result;
}

function findParent(target) {
    let result = Math.floor((target - 2) / 2);
    return result > 0 ? result : null; 
}

function findLeftChild(target, arrayLength) {
    let result = (target * 2) + 1;
    return result < arrayLength - 1 ? result : null;
}

function findRightChild(target, arrayLength) {
    let result = (target * 2) + 2;
    return result < arrayLength - 1 ? result : null;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}