function myReduce(array, func, initial) {
  var startIndex;
  var result;
  if (initial === undefined) {
    initial = array[0];
    startIndex = 1;
  } else {
    startIndex = 0;
    result = initial;
  }
  for (var i = startIndex; i < array.length; i += 1) {
    result = func(result, array[i])
  }
  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49