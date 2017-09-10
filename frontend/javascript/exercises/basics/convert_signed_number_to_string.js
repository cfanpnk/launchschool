function integerToString(number) {
  var digit;
  var num = number;
  var result = '';
  do {
    digit = num % 10;
    num = Math.floor(num / 10);
    result = digit + result;
  } while (num > 0)
  return result;
}

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(Math.abs(number));
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === '+4321');      // "+4321"
console.log(signedIntegerToString(-123) === '-123');      // "-123"
console.log(signedIntegerToString(0) === '0');         // "0"