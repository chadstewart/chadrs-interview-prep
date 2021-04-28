//best Sum

function bestSum(targetSum, numbers) {
    let result = bestSumRecursion(targetSum, numbers);
    return result === Infinity ? -1 : result; 
}

function bestSumRecursion(targetSum, numbers, count = 0) {
    if(targetSum === 0) return count;
    if(targetSum < 0) return Infinity;
    let totalCount = Infinity;
    
    for(let element of numbers) {
        let counter = bestSumRecursion(targetSum - element, numbers, count++);
        if(counter < totalCount) totalCount = counter;
    }

    return totalCount;
}

//Check answer
console.log(bestSum(7, [3,4,7,5]));

