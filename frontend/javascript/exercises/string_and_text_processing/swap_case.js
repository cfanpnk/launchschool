function isLowerCase(char) {
  return char >= 'a' && char <= 'z'
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z'
}

function swapcase(string) {
  return string.split('').map(function (char) {
    if (isLowerCase(char)) {
      return char.toUpperCase();
    } else if (isUpperCase(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapcase('CamelCase') === 'cAMELcASE');         // 'cAMELcASE'
console.log(swapcase('Tonight on XYZ-TV') === 'tONIGHT ON xyz-tv');// 'tONIGHT ON xyz-tv'