function multiplyList(array1, array2) {
  var result = []
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i] * array2[i]);
  }
  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]