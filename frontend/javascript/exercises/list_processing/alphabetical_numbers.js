
function alphabeticNumberSort(numbers) {
  var LOOKUP_TABLE = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var alphabeticalNumbers = numbers.map(function (number, index) {
    return LOOKUP_TABLE[index];
  });
  return alphabeticalNumbers.sort().map(function (number, index) {
    return numbers[LOOKUP_TABLE.indexOf(number)];
  });
}


console.log(alphabeticNumberSort([0, 1, 2])); // [1, 2, 0]
console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])); 
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]