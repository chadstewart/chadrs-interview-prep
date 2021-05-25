function quickSort(array = null, start = 0, end = array && array.length - 1) {
    if(array === null) return null;
    
    if(start < end) {
        let chosenPartition = randomPartition(array, start, end);
        quickSort(array, start, chosenPartition - 1);
        quickSort(array, chosenPartition + 1, end);
    }

    return array;
};

function randomPartition(array, start, end) {
    let randomNum = Math.floor(Math.random() * (end - start) + start);
    swap(array, randomNum, end);
    return partition(array, start, end);
};

function partition(array, start, end) {
    let pivot = array[end];
    let i = start - 1;

    for(let j = start; j <= end; j++) {
        if(array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, end);
    return i + 1;
};

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

module.exports = {
    quickSort,
    randomPartition,
    partition,
    swap
}