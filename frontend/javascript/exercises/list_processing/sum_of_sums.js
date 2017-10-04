function sumOfSums(numbers) {
  var newNumbers = numbers.map(function (number, index) {
    var innerArray = numbers.slice(0, index + 1);
    return innerArray.reduce(function (sum, num) {
      return sum + num;
    });
  });
  return newNumbers.reduce(function (sum, num) {
    return sum + num;
  });
}

console.log(sumOfSums([3, 5, 2]) === 21);       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
console.log(sumOfSums([1, 5, 7, 3]) === 36);    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
console.log(sumOfSums([4]) === 4);             // 4
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35); // 35