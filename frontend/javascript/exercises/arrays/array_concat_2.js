function concat(array1) {
  var result = array1.slice();
  var i;
  var j;

  for (j = 1; j < arguments.length; j += 1) {
    if (typeof arguments[j] === 'object' && Array.isArray(arguments[j])) {
      for (i = 0; i < arguments[j].length; i += 1) {
        result.push(arguments[j][i]);
      }
    } else {
      result.push(arguments[j]);
    }
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));
