function removeDuplicates(array) {
  var sortedArray = array.sort();
  return sortedArray.filter(function (curElement, index) {
    var prevElement = sortedArray[index - 1];
    return curElement !== prevElement;
  });
}

function union(array1, array2) {
  var unionArray = array1.concat(array2);
  return removeDuplicates(unionArray);
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([1, 1, 2, 2], [2, 3, 6])); // [1, 2, 3, 6]