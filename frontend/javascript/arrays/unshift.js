function unshift(array, value) {
  var oldLength = array.length;
  array.length = oldLength + 1;
  for (var i = oldLength - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = value;
  return array.length;
}

var count = [1, 2, 3];
console.log(unshift(count, 0));        // 4
console.log(count);                    // [ 0, 1, 2, 3 ]