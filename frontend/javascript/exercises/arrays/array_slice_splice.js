function slice(array, begin, end) {
  var length = array.length;
  var result = [];
  var i;
  if (begin > length) {
    begin = length;
  }
  if (end > length) {
    end = length;
  }
  for (i = begin; i < end; i += 1) {
    result.push(array[i]);
  }
  return result;
}

console.log(slice([1, 2, 3], 1, 2));           // [2]
console.log(slice([1, 2, 3], 2, 0));           // []
console.log(slice([1, 2, 3], 5, 1));           // []

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                 // [2, 3]
console.log(arr);                              // [1, 2, 3]


function splice(array, startIndex, removeCount) {
  var firstLength = startIndex;
  var secondLength = removeCount;
  var originalLength = array.length;
  var thirdLength = originalLength - firstLength - secondLength;
  var firstArray = [];
  var secondArray = [];
  var thirdArray = [];

  if (startIndex > originalLength) {
    startIndex = originalLength;
  }

  if (removeCount > secondLength + thirdLength) {
    removeCount = originalLength - startIndex;
  }

  for (var i = 0; i < firstLength; i++) {
    firstArray[i] = array[i];
  }

  for (var i = startIndex; i < startIndex + removeCount; i++) {
    secondArray.push(array[i]);
  }

  for (var i = startIndex + removeCount; i < originalLength; i++) {
    thirdArray.push(array[i]);
  }

  for (var j = arguments.length - 1; j >= 3; j -= 1) {
    thirdArray.unshift(arguments[j]);
  }

  array.length = firstLength + thirdArray.length;

  for (var i = 0; i < thirdArray.length; i++) {
    array[firstLength + i] = thirdArray[i];
  }
  return secondArray;
}

console.log(splice([1, 2, 3], 1, 2));                   // [2, 3]
console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
console.log(splice([1, 2, 3], 1, 0));                   // []
console.log(splice([1, 2, 3], 0, 1));                   // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'))               // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));                  // [2]
console.log(arr);                                       // [1, 'two', 3];

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
console.log(arr);                                       // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                         // []
splice(arr, 1, 0, 'a');                    // []
console.log(arr);                                       // [1, 'a', 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');                    // []
console.log(arr);                                       // ['a', 1, 2, 3]