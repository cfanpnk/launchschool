var number = parseInt(prompt('Please enter an integer greater than 0:'), 10);
var method = prompt('Enter "s" to compute the sum, "p" to compute the product.');
var array = [];
var i;
var result = 0;
for (i = 1; i <= number; i++) {
  array.push(i);
}
if (method === 's') {
  result = array.reduce(function add(sum, num) {
    return sum + num;
  });
  console.log('The sum of the integers between 1 and ' + number + ' is ' + result);
}
if (method === 'p') {
  result = array.reduce(function multiply(product, num) {
    return product * num;
  });
  console.log('The sum of the integers between 1 and ' + number + ' is ' + result);  
}
