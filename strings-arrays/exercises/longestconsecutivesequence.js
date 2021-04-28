/*
Longest Consecutive Sequence

//Problem Statement

Given an array of unsorted integars, find the subarray with the longest sequence of integars and return that array's length.

//Tests

[100,4,200,1,3,2] = 4
[0,3,7,2,5,8,4,6,0,1] = 9
[99, 1, 2, 3, 6, 100, 5, 4] = 6

//Proposed Procedure

*Written procedure goes here*

//Solution Attempt: Proposed space complexity O(n) / time complexity O(n log n)
*/

function longestConsecutiveSequence(nums) {
  nums.sort((a, b) => a - b);
  const count = getSequences(nums);
  const maxValue = count.reduce((a, b) => Math.max(a, b));
  return maxValue; 
}

function getSequences(nums) {
  const count = [];
  let tempCount = 1;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i - 1] + 1) {
      tempCount++;
    } else {
      count.push(tempCount);
      tempCount = 1;
    }
    
    if(i === nums.length - 1) count.push(tempCount);
  }

  return count;
}
/*
//Testing Notes

*Any testing observations go here*

//Optimized Solution attempt: Optimized space complexity O(?) / time complexity  O(?)

*Optimized code goes here*
*/
/*
//Notes
find sequences in an array
  - identify the lowest and the highest number in array (number range)
  - identify where a sequence begins
  - go through the sequence until it breaks
  - count the number of elements in that sequence and add that to an array
  - repeat until all elements are have been counted

find longest sequence
  - test value of each array
  - return max value
*/

console.log(longestConsecutiveSequence([99, 1, 2, 3, 6, 100, 5, 4]));
