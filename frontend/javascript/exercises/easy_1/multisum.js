function multisum(number) {
  var i;
  var multiples = [];
  for (i = 3; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce(function (sum, multiple) {
    return sum + multiple;
  });
}

console.log(multisum(3) === 3);      // 3
console.log(multisum(5) === 8);      // 8
console.log(multisum(10) === 33);     // 33
console.log(multisum(1000) === 234168);   // 234168