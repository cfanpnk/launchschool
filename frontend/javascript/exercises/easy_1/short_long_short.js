function getLongerStr(str1, str2) {
  return str1.length > str2.length ? str1 : str2;
}

function getShorterStr(str1, str2) {
  return str1.length < str2.length ? str1 : str2;
}

function shortLongShort(str1, str2) {
  var shorterStr = getShorterStr(str1, str2);
  var longerStr = getLongerStr(str1, str2);
  return shorterStr + longerStr + shorterStr;
}

console.log(shortLongShort('abc', 'defgh') === 'abcdefghabc');
console.log(shortLongShort('abcde', 'fgh') === 'fghabcdefgh');
console.log(shortLongShort('', 'xyz') === 'xyz');
