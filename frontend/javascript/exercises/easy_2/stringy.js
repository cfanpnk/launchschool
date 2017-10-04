function stringy(number) {
  var i;
  var result = '';
  for (i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
}

console.log(stringy(6)); // '101010'
console.log(stringy(9)); // '101010101'
console.log(stringy(4)); // '1010'
console.log(stringy(7)); // '1010101'
