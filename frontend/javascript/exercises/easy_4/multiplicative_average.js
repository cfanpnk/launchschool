function showMultiplicativeAverage(numbers) {
  var total = numbers.reduce(function (product, number) {
    return product * number;
  });
  var average = (total / numbers.length).toFixed(3);
  return average;
}

console.log(showMultiplicativeAverage([3, 5]));                 // '7.500'
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // '28361.667'