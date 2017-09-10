function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === false) {
      return false;
    }
  }
  return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true