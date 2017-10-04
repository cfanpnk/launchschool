function halvsies(originalArray) {
  var length = originalArray.length;
  var firstHalfLength = Math.ceil(length / 2);
  var firstHalfArray = originalArray.slice(0, firstHalfLength);
  var secondHalfArray = originalArray.slice(firstHalfLength);
  return [firstHalfArray, secondHalfArray];
}

console.log(halvsies([1, 2, 3, 4]));    // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));             // [[5], []]
console.log(halvsies([]));            // [[], []]