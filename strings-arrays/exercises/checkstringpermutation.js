// hash table solution O(n)/O(n)
function checkPermutation(string1, string2) {
  if(string1.length !== string2.length) return false;

  const checker = addStringToChecker(string1);

  for(let char of string2) {
    if(!checker[char] || checker[char].checkRemaining < 1) return false;
    checker[char].checkRemaining--;
  }

  return true;
}

function addStringToChecker(string) {
  if(!string) return;

  const checker = {};

  for(let char of string) {
    if(!checker[char]) checker[char] = {checkRemaining: 0};
    checker[char].checkRemaining++;
  };

  return checker;
}

// double loop solution O(n^2)/O(1) *If string1 has duplicates and string2 is the same size of string one and all characters but not the same number of duplicates, will return true. Bad implementation*
function checkPermutationLoops(string1, string2) {
  if(string1.length !== string2.length) return false;

  for(let char of string1) {
    for(let i = 0; i < string2.length; i++) {
      if(char === string2[i]) break;
      if(i === string2.length - 1) return false;
    }
  }

  return true;
}

// sort strings and compare index to index O(n log n)/o(n)
function checkPermutationSort(string1, string2) {
  if(string1.length !== string2.length) return false;

  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  for(let i = 0; i < string1.length; i++) if(string1[i] !== string2[i]) return false;

  return true;
}

console.log(checkPermutationSort('aabc', 'aabc'));
