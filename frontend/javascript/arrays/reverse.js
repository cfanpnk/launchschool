'use strict';

function reverse(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log(reverse([1, 2, 3, 4]));