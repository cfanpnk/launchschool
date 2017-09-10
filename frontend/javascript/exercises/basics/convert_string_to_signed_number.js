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
   
function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default:  return stringToInteger(str);
  };
}

console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);
