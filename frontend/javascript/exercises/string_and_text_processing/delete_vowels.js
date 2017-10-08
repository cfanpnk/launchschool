function removeVowels (strArray) {
  return strArray.map(function (str) {
    return str.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));             // ['bcdfghjklmnpqrstvwxyz']
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));      // ['grn', 'YLLW', 'blck', 'wht']
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                    // ['BC', '', 'XYZ']