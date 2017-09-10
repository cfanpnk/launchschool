var myArray = [5, 5];
myArray[-1] = 5;  // [5, 5, '-1': 5]
myArray[-2] = 5;  // [5, 5, '-1': 5, '-2': 5]
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];  // 5 + 5 + 5 + 5
  }

  return sum / array.length; // 20 / 2 = 10
}

console.log(average(myArray));  // 10