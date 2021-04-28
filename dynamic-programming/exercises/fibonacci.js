/*
The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

*Fibonacci Sequence*

//Problem Statement

Write code to calculate and print the Fibonacci sequence

//Tests

fibonacci(1) = 0
fibonnaci(2) = 1
fibonacci(3) = 1
fibonnaci(5) = 3
fibonnaci(7) = 8

//Proposed Procedure

Write a recursive program whose base cases will be the first and second fibonacci numbers and that calculates fib(n) by adding fib(n-1) + fib(n-2) + ... + fib(0)

//Solution Attempt: Proposed space complexity O(n) / time complexity O(2^n) *Stack overflow warning

*/

function fibonacci(num) {
  if(num < 0) return 0;
  if(num === 1) return 0;
  if(num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

/*
//Testing Notes

Works as intended. Takes forever to calculate fibonacci number past 40+. Ties up one CPU core to 100% as it's calculating.

//Optimized Procedure

As we go through recursive calls, save previously calculated fibonacci numbers so they don't need to be recalculated.

//Optimized Solution attempt: Optimized space complexity O(n) / time complexity O(n) *Stack overflow warning

*/

function fibonacciMemo(num) {
  const cache = {};
  return recursion(num, cache);
}

function recursion (num, cache) {
  if(!cache[num]) {
    if(num === 1) {
      cache[num] = 0;
    } else if (num === 2) {
      cache[num] = 1;
    } else cache[num] = recursion(num - 1, cache) + recursion(num - 2, cache)
  }

  return cache[num];
}

/*

//Testing Notes

Works as intended. Execution is significantly sped up from previous iteration. Encountered a stack overflow error when trying to count 10000.

//Optimized Procedure

As we go through recursive calls, save previously calculated fibonacci numbers so they don't need to be recalculated.

//Optimized Solution attempt: Optimized space complexity O(1) / time complexity O(n)

*/

function fibonacciTab(num) {
  let answer = 0;
  let fibMinus1 = 1;
  let fibMinus2 = 0;

  if(num === 1) return fibMinus2;
  if(num === 2) return fibMinus1;

  for(let i = 3; i <= num; i++) {
    answer = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = answer;
  }

  return answer;

}

/*
//Testing Notes

Works as intended. Solves stack overflow error when trying to count to 10000. Ironically outputs Infinity which defeats the purpose of this whole thing. XD

*/

//Optimized Solution attempt: Optimized space complexity O(n) / time complexity O(n)

function fibonacciCacheTab(num) {
  let cache = {1: 0, 2: 1};
  if(num === 1 || num === 2) return cache[num];

  for(let i = 3; i <= num; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[num];
}

/*
//Testing Notes

Works as intended. Similar solution to Tab but where there's a cache used to save the previous fibonacci numbers.

*/
console.log(fibonacciTab(10));
