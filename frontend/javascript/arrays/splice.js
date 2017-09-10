function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function splice(array, startIndex, removeCount) {
  var firstLength = startIndex;
  var secondLength = removeCount;
  var originalLength = array.length;
  var thirdLength = originalLength - firstLength - secondLength;
  var firstArray = [];
  var secondArray = [];
  var thirdArray = [];

  for (var i = 0; i < firstLength; i++) {
    firstArray[i] = array[i];
  }

  for (var i = startIndex; i < startIndex + removeCount; i++) {
    push(secondArray, array[i]);
  }

  for (var i = startIndex + removeCount; i < originalLength; i++) {
    push(thirdArray, array[i]);
  }

  array.length = firstLength + thirdLength;

  for (var i = 0; i < thirdLength; i++) {
    array[firstLength + i] = thirdArray[i];
  }
  return secondArray;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5)); 
console.log(count);