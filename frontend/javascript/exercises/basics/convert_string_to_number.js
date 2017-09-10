function stringToInteger(str) {
  var i;
  var RADIX = 10;
  var result = 0;
  var count = str.length;
  for (i = 0; i < str.length; i += 1) {
    count -= 1;
    result += str[i] * Math.pow(RADIX, count);
  }
  return result;
}

console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);    