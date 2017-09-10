function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

var array1 = [1, 2, 3];
var array2 = [2, 3, 4];
console.log(productOfSums(array1, array2));