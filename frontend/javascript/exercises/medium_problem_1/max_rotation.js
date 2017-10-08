function rotate(str) {
  return str.slice(1) + str[0];
}

function rotateRightmostDigits(digits, n) {
  var digitsStr = String(digits);
  var strToRotate = digitsStr.slice(-n);
  var strNotToRotate = digitsStr.substr(0, digitsStr.length - n);
  return Number(strNotToRotate + rotate(strToRotate));
}

function maxRotation(number) {
  var result = number;
  var length = String(number).length;
  for (var i = length; i >= 2; i--) {
    result = rotateRightmostDigits(result, i);
  }
  return result;
}

console.log(maxRotation(735291));        // 321579
console.log(maxRotation(3));             // 3
console.log(maxRotation(35));            // 53
console.log(maxRotation(105));           // 15 # the leading zero gets dropped
console.log(maxRotation(8703529146));    // 7321609845