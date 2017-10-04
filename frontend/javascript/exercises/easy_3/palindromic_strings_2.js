function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

function isRealPalindrome(str) {
  var newStr = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  return isPalindrome(newStr);
}

console.log(isRealPalindrome('madam') === true);               // true
console.log(isRealPalindrome('Madam') === true);               // true (case does not matter)
console.log(isRealPalindrome('Madam, I\'m Adam') === true);    // true (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);              // true
console.log(isRealPalindrome('356a653') === true);             // true
console.log(isRealPalindrome('123ab321') === false);            // false