// ##Understand the problem:
// 1. Ignore special characters:
//    - space, dot, dash, parenthesis
// 2. Rules:
//    - If the number < 10 => bad number
//    - if the number > 11 => bad number
//    - If the number is 11, and the first number is NOT 1 => bad number
//    - If the number is 11, and the first number 1, trim the 1
// 3. bad number => 0000000000
// ##Input/Output
// - Input: A string
// - Output: A string
// ##Algorithm:
// 1. Remove special characters
// 2. If it is a bad number, return 0000000000
// 3. If the number is 11 and the first number is 1, trim the 1 and return the number

var BAD_NUMBER = '0000000000';

function isBadNumber(number) {
  var length = number.length;
  if (length < 10 || length > 11) {
    return true;
  }
  if (length === 11 && number[0] !== '1') {
    return true;
  }
  return false;
}
function cleanPhoneNumber(input) {
  var phoneNumber = input.replace(/[\D]/g, '');
  if (isBadNumber(phoneNumber)) {
    return BAD_NUMBER;
  } else if (phoneNumber.length === 11) {
    return phoneNumber.slice(1);
  }
  return phoneNumber;
}

console.log(cleanPhoneNumber('(210)-639-9941') === '2106399941');
console.log(cleanPhoneNumber('12345') === '0000000000');
console.log(cleanPhoneNumber('123456789000') === '0000000000');
console.log(cleanPhoneNumber('12106399941') === '2106399941');
console.log(cleanPhoneNumber('22106399941') === '0000000000');
console.log(cleanPhoneNumber('') === '0000000000');
console.log(cleanPhoneNumber('2106399941    ') === '2106399941');
console.log(cleanPhoneNumber('2106399941  a  ') === '2106399941');
