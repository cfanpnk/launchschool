// ##Requirements:
// 1. We can not use both letters from any given block, i.e. the letters in each block cannot be repeated.
// 2. We can only use each block once. 
// 3. Case insensitive
// Input: a string which is a word
// Output: true if no violation of the rule and false otherwise
// ##Data Structure:
// Array/Object
// {'B':'O', 'X':'K'}
// ##Algorithm:
// 1. Split the word into an array
// 2. Based on the spelling block lookup table, map the array into a new array
// 3. Check if the word has duplicate chars
//    - Iterfate the array and add each char to an object with value 1
//    - If the char alreayd exists in the object, return true right away
//    - return false after the iteration
// 4. If there is duplicate char, then return true, otherwise return false

var SPELLING_BLOCKS = {
  B: 'O',
  X: 'K',
  D: 'Q',
  C: 'P',
  N: 'A',
  G: 'T',
  R: 'E',
  F: 'S',
  J: 'W',
  H: 'U',
  V: 'I',
  L: 'Y',
  Z: 'M'
};

function checkDuplicateChar(charArr) {
  var charObj = {};
  var i;
  for (i = 0; i < charArr.length; i += 1) {
    if (Object.keys(charObj).includes(charArr[i])) {
      charObj[charArr[i]] += 1;
      return true;
    }
    charObj[charArr[i]] = 1;
  }
  return false;
}

function isBlockWord(word) {
  var charArr = word.toUpperCase().split('');
  var newCharArr = charArr.map(function (char) {
    return SPELLING_BLOCKS[char] || char;
  });
  if (checkDuplicateChar(newCharArr)) {
    return false;
  }
  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true
console.log(isBlockWord('floW'));  // true
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box'));   // false
