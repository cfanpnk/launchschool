function sum(number) {
  return String(number).split('').map(Number).reduce(function (sum, number) {
    return sum + number;
  })
}

console.log(sum(23));          // 5
console.log(sum(496));         // 19
console.log(sum(123456789));   // 45