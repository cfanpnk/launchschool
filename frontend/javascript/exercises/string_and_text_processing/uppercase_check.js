function isUppercase(string) {
  letters = string.split('').filter(function (char) {
    return char.match(/[a-z]/i);
  }).join('');
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] >= 'Z' || letters[i] <= 'A') {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t') === false);          // false
console.log(isUppercase('T') === true);           // true
console.log(isUppercase('Four Score') === false); // false
console.log(isUppercase('FOUR SCORE') === true);  // true
console.log(isUppercase('4SCORE!') === true);     // true
console.log(isUppercase('') === true);            // true