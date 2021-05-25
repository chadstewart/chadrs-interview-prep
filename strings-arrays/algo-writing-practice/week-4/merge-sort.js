function mergeSort(array) {
    if(array === null) return array;

    let { length } = array;

    if(length > 1) {
        let middle = length / 2;
        let left = mergeSort(array.slice(0, middle));
        let right = mergeSort(array.slice(middle));
        array = merge(left, right);
    }

    return array;
}

function merge(left, right) {
    let result = [];
    
    while(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
};

console.log(mergeSort([3,1,5,1,15,6,9,4]));