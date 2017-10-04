var bill = parseFloat(prompt('What is the bill?'));
var percentage = parseFloat(prompt('What is the tip percentage')) / 100;
var tip = bill * percentage;
var total = bill + tip;
console.log('The tip is $' + tip.toFixed(1));
console.log('The total is $' + total.toFixed(1));
