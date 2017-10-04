function asciiValue(string) {
  var strArray = string.split('');
  return strArray.reduce(function (sum, char) {
    return sum + char.charCodeAt();
  }, 0);
}

console.log(asciiValue('Four score') === 984);         // 984
console.log(asciiValue('Launch School') === 1251);      // 1251
console.log(asciiValue('a') === 97);                  // 97
console.log(asciiValue('') === 0);                   // 0