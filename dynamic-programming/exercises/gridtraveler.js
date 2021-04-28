/*

Problem Statement: Say you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how Many ways can you travel to the goal on a grid with dimensions m * n?

Write a function 'gridTraveler(m, n)' that calculates this.

*/

//Recursive solution: Time O(2^m + n)/Space(m + n)

function gridTraveler(length, width) {
    if (length === 0 || width === 0) return 0;
    if (length === 1 && width === 1) return 1;
    return gridTraveler(length - 1, width) + gridTraveler(length, width - 1);
}

//Recursive solution: Time O(m + n)/Space(m + n)

function gridTravelerMemo(length, width, cache = {}) {
    const key = `${length}, ${width}`;
    if (length === 0 || width === 0) return 0;
    if (length === 1 && width === 1) return 1;
    if (cache[key]) return cache[key];
    cache[key] = gridTravelerMemo(length - 1, width, cache) + gridTravelerMemo(length, width - 1, cache);
    return cache[key]
}

//Recursive solution (cached key and the key's reverse): Time O(m + n)/Space(m + n)

function gridTravelerMemoWithReverse(length, width, cache = {}) {
    const key = `${length}, ${width}`;
    const keyReverse = `${width}, ${length}`;
    if (length === 0 || width === 0) return 0;
    if (length === 1 && width === 1) return 1;
    if (cache[key]) return cache[key];
    cache[key] = gridTravelerMemo(length - 1, width, cache) + gridTravelerMemo(length, width - 1, cache);
    cache[keyReverse] = cache[key];
    return cache[key]
}

//Tabulation??? solution: Time O(m*n)/Space(m*n)

function uniquePaths(length, width) {
	let dp = Array(length).fill(null).map(()=>Array(width).fill(0));
	for(let i=0; i<length; i++)
		for(let j=0; j<width; j++)
			if(i==0||j==0) dp[i][j] = 1;
            else dp[i][j] = dp[i-1][j] + dp[i][j-1];
	return dp[length-1][width-1];
}

//Utility function to see how the table in the tabulation solution is formed.

function gridCreator(m, n, item) {
    let grid = '';
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            grid = grid + `[${item[i][j]}]`;
        }

        grid = grid + '\n';
    }

    console.log(grid);
}

const test = gridTravelerMemoWithReverse;

console.log(test(1,1));
console.log(test(1,2));
console.log(test(3,3));
console.log(test(4,4));
console.log(test(20,20));