function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']) === 'U'); // Returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']) === 'A'); // Returns "A"

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits, 3) === 16); // Returns 16
console.log(nthElementOf(digits, 8) === undefined); // What does this return?
console.log(nthElementOf(digits, -1) === undefined); // What does this return?

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice(0);
  } else {
    return arr.slice(arr.length - count);
  }
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3)); // Returns [16, 23, 42]
console.log(lastNOf(digits, 10)); // Returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  var newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1]);
  return newArr;
}

console.log(endsOf([4, 8, 15], [16, 23, 42])); // Returns [4, 42])