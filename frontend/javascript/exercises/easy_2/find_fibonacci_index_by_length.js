function findFibonacciIndexByLength(numberOfDigits) {
  var fibonacciArr = [1, 1];
  while (fibonacciArr[fibonacciArr.length - 1].toString().length < numberOfDigits) {
    var length = fibonacciArr.length;
    var fibonacciNumber = fibonacciArr[length - 1] + fibonacciArr[length - 2];
    fibonacciArr.push(fibonacciNumber);
  }
  return fibonacciArr.length;
}

console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);