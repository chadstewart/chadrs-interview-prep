/*

uniqueChars with supportive data structure O(n)/O(n)

function uniqueChars(input, isCapsUnique = true) {
  const charsFound = {}
  let testString = input;
  if(!isCapsUnique) testString = testString.toLowerCase();

  for(let i = 0; i < testString.length; i++) {
    const charTested = testString.charAt(i);

    if(charsFound[charTested]) return false;

    charsFound[charTested] = true;
  }

  return true;
}

*/

/*

uniqueChars without supportive data structure O(n^2)/O(1)

function uniqueChars(input, isCapsUnique = true, isTestingSpaces = false) {
  let testString = input;
  if(!isCapsUnique) testString = testString.toLowerCase();

  for(let i = 0; i < testString.length; i++) {
    if(!isTestingSpaces && testString === " ") continue;

    for(let j = 0; j < testString.length; j++) {
      if(i === j) continue;

      if(testString[i] === testString[j]) return false;
    }
  }

  return true;
}
*/

//Check for uniqueness by sorting the string and testing each character's neighbors (no added data structure) O(n log n)/O(1)

function uniqueChars(input, isCapsUnique = true, isTestingSpaces = true) {
  let testString = input;
  if(!isCapsUnique) testString = testString.toLowerCase();
  testString = testString.split('').sort().join('');
  if(isTestingSpaces) testString = testString.trim();

  for(let i = 0; i < testString.length - 1; i++) {
    if(testString[i] === testString[i + 1]) return false;
  }

  return true;
}

console.log("Testing abc: ", uniqueChars("abc"));
console.log("Testing Chad Stewart: ", uniqueChars("Chad Stewart"));
console.log("Testing tT: ", uniqueChars("tT"));
console.log("Testing tT where caps aren't unique: ", uniqueChars("tT", false));

/*

Ideas on how else to solve this problem:

Use ASCII to slice all chars but the test character and then test if the result is 0 or 1.
Sort string, and test each character's right neighbors. [x]

*/
