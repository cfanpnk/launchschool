function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function concat(array1, array2) {
  result = [];
  for (var i = 0; i < array1.length; i++) {
    result[i] = array1[i];
  }
  for (var i = 0; i < array2.length; i++) {
    push(result, array2[i]);
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ])