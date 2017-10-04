function interleave(array1, array2) {
  var i;
  var combinedArray = [];
  for (i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i], array2[i]);
  }
  return combinedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])) // [1, 'a', 2, 'b', 3, 'c']