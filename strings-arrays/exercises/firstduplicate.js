//two loops O(n^2)/O(1)
function firstDuplicate(array) {
  for(let i = 1; i < array.length; i++) {
    for(let j = 0; j < i; j++) {
      if(array[i] === array[j]) return i;
    }
  }

  return -1;
}

//hash table O(n)/O(n)
function firstDuplicateHashTable(array) {
  if(array.length < 2) return -1;

  const checker = {};

  for(let i = 0; i < array.length; i++) {
    if(checker[array[i]] !== true) {
      checker[array[i]] = true;
    } else return i;
  }


  return -1;
}

console.log('index for first duplicate: ', firstDuplicateHashTable([1,2,3,4,5,6,7]));
