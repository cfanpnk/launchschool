function rotate(str) {
  return str.slice(1) + str[0];
}

function rotateRightmostDigits(digits, n) {
  var digitsStr = String(digits);
  var strToRotate = digitsStr.slice(-n);
  var strNotToRotate = digitsStr.substr(0, digitsStr.length - n);
  return Number(strNotToRotate + rotate(strToRotate));
}

console.log(rotateRightmostDigits(735291, 1) === 735291); // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219); // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912); // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915); // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913); // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917); // 352917
