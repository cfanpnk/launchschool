var numArray = []
var num1 = prompt('Enter the 1st number');
numArray.push(num1);
var num2 = prompt('Enter the 2nd number');
numArray.push(num2);
var num3 = prompt('Enter the 3rd number');
numArray.push(num3);
var num4 = prompt('Enter the 4th number');
numArray.push(num4);
var num5 = prompt('Enter the 5th number');
numArray.push(num5);
var lastNum = prompt('Enter the last number');

if (numArray.includes(lastNum)) {
  console.log('The number ' + lastNum + ' appears in ' + numArray + '.');
} else {
  console.log('The number ' + lastNum + ' does not appear in ' + numArray + '.');  
}
