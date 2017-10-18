// Write a function that takes a two dimensional array as the argument, turn it into a flat array and with all the duplicated elements removed. Treat numbers and number strings, for example, 1 and '1' as duplicates, and keep the one that comes first in the flattened array.
// Requirements:
// Input: 2d array
// Output: array
// Rules:
// 1. Turn the 2d array into an array with all the duplicated elements removed
// 2. Numbers and number strings are treated as duplicates
// 3. Keep the one that comes first 
// Examples:
// [['a,' ,'b', 'c'], ['d', 'e', 'f']] => ['a', 'b', 'c', 'd', 'e', 'f']
// [['a,' ,'b', 'c'], ['a', 'e', 'f']] => ['a', 'b', 'c', 'e', 'f']
// [['1', 2, 3], [1, 4, 5]] => ['1', 2, 3, 4, 5]
// [[1, 2, 3], ['1', 4, 5]] => [1, 2, 3, 4, 5]
// Data strcture:
// 2d array => array
// Algorithm:
// 1. Iterate thru the 2d array
// 2. Determine if the current element exists in the result array or not. If it does not exists, push it to the result array
//    - How to determine if the element exists in the array or not?
//      - If it exists in the result array, return true right away
//      - if it does not exist and it's a number, convert each number to a string first and compare
//      - if it does not exist and it's a string, convert each string to a number first and compare
// [['1', 2, 3], [1, 4, 5]]
// => ['1', 2, 3, 4, 5]

function doesExist(array, element) {
  if (array.indexOf(element) >= 0) {
    return true;
  } else if (typeof element === 'number') {
    var existingElement = String(element);
    if (array.indexOf(existingElement) >= 0) {
      return true;
    }
  } else if (typeof element === 'string') {
    var existingElement = Number(element);
    if (array.indexOf(existingElement) >= 0) {
      return true;
    }
  }
  return false;
}

function convert(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (!doesExist(result, array[i][j])) {
        result.push(array[i][j]);
      }
    }
  }
  return result;
}

// console.log(doesExist(['a', 'b'], 'a'));
// console.log(doesExist(['1', 2, 3], 1));
// console.log(doesExist(['1', 2, 3], 4));
console.log(convert([['a' ,'b', 'c'], ['d', 'e', 'f']])); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(convert([['a' ,'b', 'c'], ['a', 'e', 'f']])); // ['a', 'b' , 'c', 'e', 'f']
console.log(convert([['1', 2, 3], [1, 4, 5]])); // ['1', 2, 3, 4, 5]
console.log(convert([[1, 2, 3], ['1', 4, 5]])); // [1, 2, 3, 4, 6]
console.log(convert([['1', 2, 3], [1, 4, 5]])); // ['1', 2, 3, 4, 5]
console.log(convert([[1, 2, 3], ['1', 4, 5]])); // [1, 2, 3, 4, 5]