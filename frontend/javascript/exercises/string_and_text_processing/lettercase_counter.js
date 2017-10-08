function isLowerCase(char) {
  return char >= 'a' && char <= 'z'
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z'
}

function isNeither(char) {
  return !isLowerCase(char) && !isUpperCase(char);
}

function letterCaseCount(string) {
  var counter = {lowercase: 0, uppercase: 0, neither: 0};
  counter.uppercase = string.split('').filter(isUpperCase).length;
  counter.lowercase = string.split('').filter(isLowerCase).length;
  counter.neither = string.split('').filter(isNeither).length;
  return counter;
}

// original solution:
// function letterCaseCount(string) {
//   var counter = {lowercase: 0, uppercase: 0, neither: 0};
//   for (var i = 0; i < string.length; i++) {
//     if (isUpperCase(string[i])) {
//       counter.uppercase += 1;
//     } else if (isLowerCase(string[i])) {
//       counter.lowercase += 1;
//     } else {
//       counter.neither += 1;
//     }
//   }
//   return counter;
// }

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));   // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));        // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));           // { lowercase: 0, uppercase: 0, neither: 0 }