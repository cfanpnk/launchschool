function reverse(input) {
  var result = [];
  var i;
  var j = 0;
  for (i = input.length - 1; i >= 0; i -= 1) {
    result[j] = input[i];
    j += 1;
  }
  if (typeof input === 'string') {
    return result.join('');
  } else {
    return result;
  }
}

console.log(reverse('Hello'));          // olleH
console.log(reverse('a'));              // a
console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
console.log(reverse([]));               // []