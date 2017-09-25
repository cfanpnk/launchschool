// ##Understand the problem:
// Input: A string including numbers only (ignore all non digits)
// Output: Boolean (true for valid, false for invalid)
// 1. Count from the right to left
// 2. Double the digit of every second digit (2, 4, 6, 8, ...)
// 3. For any digits that is >= 10, substract it by 9
// 4. Add all digits together
// 5. If the sum can be divided by 10, then return true
// ##Data structure
// Array
// ##Algorithm:
// 1. Remove all non-digit chars from the input
// 2. Split the input and get a char array
// 3. Map the array into a new array which has every second digit doubled.
// 4. Reduce the array to a sum value
// 5. If the sum can be divided by 10, return true, return false otherwise

function is_valid_lunhn_fomula(input) {
  var number = input.replace(/\D/g, '');
  var numberArr = number.split('');
  var doubledNumberArr = numberArr.reverse().map(Number).map(function (digit, index) {
    if (index % 2 === 1) {
      digit = digit * 2;
      if (digit >= 10) {
        digit = digit - 9;
      }
    }
    return digit;
  });
  var total = doubledNumberArr.reduce(function (sum, digit) {
    return sum + digit;
  });
  return total % 10 === 0;
}

console.log(is_valid_lunhn_fomula('1111') === false); // false
console.log(is_valid_lunhn_fomula('8763') === true); // true
console.log(is_valid_lunhn_fomula('2323 2005 7766 3554') === true); // true
console.log(is_valid_lunhn_fomula('2323 - 2005 - 7766 - 3554') === true); // true
console.log(is_valid_lunhn_fomula('2323-2005-7766-3554') === true); // true
console.log(is_valid_lunhn_fomula('2323-2005-7766-355')); // true




// [8, 7, 6, 3];
// [3, 6, 7, 8];
// [3, 12, 7, 16]

// [16, 7, 12, 3];
// [7, 7, 3, 3];
// sum = 20;
// true


// [1, 1, 1, 1]
// [2, 1, 2, 1]
// sum = 6
// false

// [2, 3, 2, 3, 2, 0, 0, 5, 7, 7, 6, 6, 3, 5, 5, 4]
// [4, 3, 4, 3, 4, 0, 0, 5, 5, 7, 3, 6, 6, 5, 1, 4]
// sum = 60
// true
