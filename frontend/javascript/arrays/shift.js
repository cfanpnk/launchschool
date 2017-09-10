function shift(array) {
  var firstValue = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return firstValue;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]