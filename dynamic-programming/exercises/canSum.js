/*

Problem statement: Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indictating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.

*/

//Recursive solution

function canSum(targetSum, numbers) {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    let isSum = false;
    
    for(let element of numbers) {
        let checker = canSum(targetSum - element, numbers);
        if(checker) isSum = checker;
    }

    return isSum;
}

//Memoized Recursive Solution
function canSumMemoized(targetSum, numbers, memo = {}) {
    if(memo[targetSum]) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    let remainder;
    
    for(let element of numbers) {
        remainder = targetSum - element;
        memo[remainder] = canSumMemoized(remainder, numbers, memo);
        if(memo[remainder] === true) return memo[remainder];
    }

    return memo[remainder];
}

//Check answer
console.log(canSumMemoized(7, [3,4,7,5]));