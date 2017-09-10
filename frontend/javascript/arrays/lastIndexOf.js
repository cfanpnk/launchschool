function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));         // 3
console.log(lastIndexOf([1, 2, 3], 4));            // -1
