// 1. Get the first element as the starting point of the range
// 2. Get the last element as the end point of the range
// 3. Populate an array using the range
// 4. Loop through the arr, get the missing number and push it to the new array

function missing(arr) {
  var start = arr[0];
  var end = arr[arr.length - 1];
  var allElements = [];
  var missingElements = [];
  for (var i = start; i <= end; i++) {
    allElements.push(i);
  }
  for (var i = 0; i < allElements.length - 1; i++) {
    if (arr.indexOf(allElements[i]) === -1) {
      missingElements.push(allElements[i]);
    }
  }
  return missingElements;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
