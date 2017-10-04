var CONVERSION = 10.7639;
var length = window.prompt('Enter the length of the room in meters:');
var width = window.prompt('Enter the width of the room in meters:');
var area = Number(length) * Number(width);
var convertedArea = area * CONVERSION;
console.log('The area of the room is ' + area.toFixed(1) + ' square meters ' + '(' + convertedArea.toFixed(2) + ' square feet).');