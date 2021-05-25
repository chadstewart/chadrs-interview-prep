function binarySearch(target, sortedArray) {
    if(target === null) return 'Please add a target';
    if(sortedArray === null) return 'Pleaes add an array';

    let start = 0;
    let end = sortedArray.length;

    while(start <= end) {
        let middle = start + Math.floor((end - start) / 2);

        if(sortedArray[middle] === target) {
            return middle;
        } else if(sortedArray[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return 'Target is not in this array';
}

console.log(binarySearch(4, [3,4,7,8,9,11]));