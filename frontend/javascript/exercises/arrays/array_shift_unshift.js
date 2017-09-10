function shift(array) {
  var result;
  result = array[0];
  array.splice(0, 1);
  return result;
}

function unshift(array) {
  var i;
  var j;
  array.length = array.length + arguments.length - 1;
  for (i = array.length - 1; i >= arguments.length - 1; i -= 1) {
    array[i] = array[i - 1];
  }
  for (j = 1; j < arguments.length; j += 1) {
    array[j - 1] = arguments[j];
  }
  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4 ,5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2 ,3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray) === 1);                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5) === 3);           // 3
console.log(testArray);                       // [5, 2, 3]