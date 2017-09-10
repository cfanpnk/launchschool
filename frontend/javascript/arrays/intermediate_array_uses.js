function oddElementsOf(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits)); // Returns [8, 16, 42]

function combinedArray(even, odd) {
  newArr = [];
  for (var i = 0; i < even.length; i++) {
    newArr.push(even[i]);
    newArr.push(odd[i]);
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters)); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

function combineWithReverse(arr) {
  var originalArr = arr.slice(0);
  var reverseArr = arr.reverse();
  var newArr = originalArr.concat(reverseArr);
  return newArr;
}

var digits = [1, 2, 3, 4];
console.log(combineWithReverse(digits));


function sortDescending(arr) {
  var newArr = arr.slice();
  newArr.sort(function compare(a, b) {
    return b - a;
  });
  return newArr;
}
var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
console.log(array);    // Logs [23, 4, 16, 42, 8, 15])

function matrixSums(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var total = arr[i].reduce(function(a, b) {
      return a + b;
    });
    newArr.push(total);
  }
  return newArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]


function uniqueElements(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]













