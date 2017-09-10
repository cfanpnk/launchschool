function push(array, value) {
  array[array.length] = value;
  return array.length;
}

var count = [1, 2, 3];
console.log(push(count, 4));   // 4
console.log(count);            // [ 1, 2, 3, 4 ]