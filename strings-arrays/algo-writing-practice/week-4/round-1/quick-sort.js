function quickSort(array = null, start = 0, end = array && array.length - 1) {
    if(array === null) return 'Please add an array';

    if(start < end) {
        let chosenPartition = randomPartition(array, start, end);
        quickSort(array, start, chosenPartition - 1);
        quickSort(array, chosenPartition + 1, end);
    }

    return array;
}

function randomPartition(array, start, end) {
    let randomNum = Math.floor(Math.random() * (end - start) + start);
    swap(array, randomNum, end);
    return partition(array, start, end);
}

function partition(array, start, end) {
    let pivot = array[end];
    let i = start - 1;

    for(let j = start; j <= end; j++) {
        if(array[j] < pivot){
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, end);
    return i + 1;
}

function swap(array, pos1, pos2) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

console.log(quickSort([3,1,6]));