function multiplyAllPairs(array1, array2) {
  var result = [];
  array1.forEach(function (number1) {
    array2.forEach(function (number2) {
      result.push(number1 * number2);
    });
  });
  return result.sort(function (num1, num2) {
    return num1 - num2;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]