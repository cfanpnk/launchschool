function average(numbers) {
  var total = numbers.reduce(function (sum, number) {
    return sum + number;
  });
  return Math.floor(total / numbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));    // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40