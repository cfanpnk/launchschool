function myMap(array, func) {
  var result = [];
  for (var i = 0; i < array.length; i += 1) {
    result[i] = func(array[i]);
  }
  return result;
}

var plusOne = function(n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));       // [2, 3, 4, 5]