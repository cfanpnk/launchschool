// ##Requirements:
// Input: a list of numbers in a string
// Output: A list of complete numbers in an array
// 1. Only the significant part of next number is given. e.g. 2 could mean 12, 4 could mean 14
// 2. Each element is delimitted by ','
// 3. The element could either be a number or a range.
// 4. A range can be delimitted by a separactor (-, :, ..)
//    - Normal range: can have multiple numbers delimitted by (-, :, ..). start..end (from start to the end)
//    - Shorthand range

// ##Data Structures:
// String => Array => Array

// ##Algorithm:
// 1. Split the input string into a number array
// 2. Iterate thru the number array and convert all shorthanded numbers to complete numbers
//    - If the next number is smaller than the previous one , convert the short-hand number to a complete number: 2 => 12
//    - How to convert the short-hand number to a complete number? 
//      * Get the non-significant number of the previous number: 7 -> 10, 14 -> 20. (Math.ceil(17/10) * 10)
// 3. Convert the range to a list of numbers: 1-3 => 1,2,3 11-12 => 11, 12
//    - Iterate from the first number to the last number

function convertRangeToNumbers(rangeStr) {
  var rangeArr = rangeStr.split(/[\-:]|\.\./);
  var i;
  var range = [];
  var start = parseInt(rangeArr[0], 10);
  var end = parseInt(rangeArr[rangeArr.length - 1], 10);
  for (i = start; i <= end; i += 1) {
    range.push(i);
  }
  return range;
}

function getCompleteNumber(pre, cur) {
  var count = 0;
  var completeNumber = cur;
  var previousNumber = parseInt(pre, 10);
  while (Number(completeNumber) < Number(pre)) {
    count++;
    completeNumber = parseInt(count.toString() + cur.toString(), 10);
  }
  return completeNumber.toString();
}

function convertShorthandToComplete(numbersStrArr) {
  var i;
  var result = [];
  var previousNumber;
  var currentNumber;
  result.push(numbersStrArr[0]);
  result.push(numbersStrArr[1]);
  
  for(i = 2; i < numbersStrArr.length; i++) {
    if (isNumeric(numbersStrArr[i])) {
      previousNumber = numbersStrArr[i - 2];
      currentNumber = numbersStrArr[i];
      if (Number(currentNumber) < Number(previousNumber)) {
        numbersStrArr[i] = getCompleteNumber(previousNumber, currentNumber);
      } 
    }
  }
  return numbersStrArr.join('');
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function convert(numbersStr) {
  var numbersStrArr = numbersStr.split(/([\-:,]|\.\.)/);
  var completeNumbersStrArray = []
  var shortHandNumbers = []
  var i;
  completeNumbersStrArray = convertShorthandToComplete(numbersStrArr);
  completeNumbersStrArray.split(/[,]/).forEach(function (element) {
    // if it is a range
    if (element.match(/[\-:]|\.\./)) {
      shortHandNumbers = shortHandNumbers.concat(convertRangeToNumbers(element));
    } else {
      shortHandNumbers.push(element);
    }
  })

  return shortHandNumbers.map(Number);
}

console.log(convert('1,3,7,2,4,1')); // [1, 3, 7, 12, 14, 21]
console.log(convert('1-3,1-2')); // [1, 2, 3, 11, 12]
console.log(convert('1:3,1:2')); // [1, 2, 3, 11, 12]
console.log(convert('1..3,1..2')); // [1, 2, 3, 11, 12]
console.log(convert('1:5:2')); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(convert('104:2')); // [104, 105, 106, 107, 108, 109, 110, 112]
console.log(convert('104..02')); // [104, 105, 106, 107, 108, 109, 110, 111, ... 202]
console.log(convert('545,64:11')); // [545, 564, 567, ..., 611]
