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

console.log(integerToString(4321));
console.log(integerToString(0));