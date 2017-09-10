function radianToDegree(radian) {
  return 180 / Math.PI * radian;
}

var degree = -180;
console.log(Math.abs(degree));

var number = 16777216;
console.log(Math.sqrt(number));

console.log(Math.pow(16, 6));

var a = 50.72;
var b = 49.2;
var c = 49.86;
console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(generateRandomInteger(1, 10));