function join(array, separator) {
  var result = '';
  var length = array.length;
  for (var i = 0; i < length; i++) {
    if (i === length - 1) {
      result += array[i].toString();
    } else {
      result += array[i].toString() + separator;
    }
  }
  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'