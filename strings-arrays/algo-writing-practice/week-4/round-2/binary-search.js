function binarySearch(target, sortedArray) {
    if(target === null || sortedArray == null) return null;

    let start = 0;
    let end = sortedArray.length;

    while(start <= end) {
        let middle = Math.floor((end - start) / 2) + start;

        if(target === sortedArray[middle]) {
            return middle;
        } else if (target > sortedArray[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return 'target is not in this array';
}