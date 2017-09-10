function octalToDecimal(numberString) {
  var numberStrArr = numberString.split('');
  var numberArray = numberStrArr.reverse().map(function(digitChar, index) {
    return Number(digitChar) * Math.pow(8, index);
  });
  var result = numberArray.reduce(function(sum, number) {
    return sum + number;
  })
  return result;
}
console.log(octalToDecimal('233') === 155);       // 1
console.log(octalToDecimal('1') === 1);           // 1
console.log(octalToDecimal('10') === 8);          // 8
console.log(octalToDecimal('130') === 88);        // 88
console.log(octalToDecimal('17') === 15);         // 15
console.log(octalToDecimal('2047') === 1063);     // 1063
console.log(octalToDecimal('011') === 9);         // 9