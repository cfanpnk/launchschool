function convert(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    result += array[i].toString();
  }
  return result;
}

console.log(convert([1, 'a', 4]) === '1a4');