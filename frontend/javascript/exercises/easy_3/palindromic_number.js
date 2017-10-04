function isPalindromicNumber(number) {
  var numberStr = number.toString().replace(/^0+/, '');
  console.log(numberStr);
  return numberStr.split('').reverse().join('') === numberStr;
}

console.log(isPalindromicNumber(34543) === true);        // true
console.log(isPalindromicNumber(123210) === false);       // false
console.log(isPalindromicNumber(22) === true);           // true
console.log(isPalindromicNumber(5) === true);            // true
