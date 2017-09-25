// Requirements:
// Input: A string including numbers only (ignore all non digits)
// Output: A string with the added check digit
// Example:
// 2323 2005 7766 355 => 2323 2005 7766 3554
// Algorithm:
// 1. Perform Luhn Fomula checksum on the input and get the sum
// 2. Iterate 0-9 and add each number to the sum.
// 3. If the new sum can be divided by 10, then the current number is the check digit.
// 4. Append the check digit to the input and return a new string.

function isValidLunhnFomula(input) {
  var number = input.replace(/\D/g, '');
  var sum = getCheckSum(number);
  return sum % 10 === 0;
}

function getCheckSum(input) {
  var numberArr = input.split('');
  var total;
  var doubledNumberArr = numberArr.reverse().map(Number).map(function (digit, index) {
    if (index % 2 === 1) {
      digit *= 2;
      if (digit >= 10) {
        digit -= 9;
      }
    }
    return digit;
  });
  total = doubledNumberArr.reduce(function (sum, digit) {
    return sum + digit;
  });
  return total;
}

function getCheckDigit(input) {
  var i;
  var number;

  for (i = 0; i <= 9; i += 1) {
    number = input + i.toString();
    if (isValidLunhnFomula(number)) {
      return i;
    }
  }
}

function appendCheckDigit(input) {
  var number = input.replace(/\D/g, '');  
  if (isValidLunhnFomula(number)) {
    return number;
  } else {
    return number + getCheckDigit(number).toString();
  }
}

console.log(appendCheckDigit('2323 2005 7766 355')); // '2323200577663554'
console.log(appendCheckDigit('2323 2005 7766 3554')); // '2323200577663554'


