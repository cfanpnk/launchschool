function substitute(char, key) {
  var code = char.charCodeAt(0);
  var LOWER_CASE_CODE = 97;
  var UPPER_CASE_CODE = 65;
  var newCode = 0;
  if (char.match(/[a-z]/)) {
    newCode = (code - LOWER_CASE_CODE + key) % 26 + LOWER_CASE_CODE;
  } else if (char.match(/[A-Z]/)) {
    newCode = (code - UPPER_CASE_CODE + key) % 26 + UPPER_CASE_CODE;
  }
  return String.fromCharCode(newCode);
}
function caesarEncrypt(sentence, key) {
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[^a-z]/i)) {
      result += sentence[i];
    } else {
      result += substitute(sentence[i], key);
    }
  }
  return result;
}

// console.log(substitute('y', 5));

// // Simple shift
console.log(caesarEncrypt('A', 0));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'

// // Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// // All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // ZABCDEFGHIJKLMNOPQRSTUVWXY
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// // Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?