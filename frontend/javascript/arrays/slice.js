function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function slice(array, startIndex, endIndex) {
  var result = [];
  for (var i = startIndex; i < endIndex; i++) {
    push(result, array[i]);
  }
  return result;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                         // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));     // [ 'b', 'c' ]