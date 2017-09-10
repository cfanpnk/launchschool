function search(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4], 3) === 2);
console.log(search([1, 2, 3, 4], 10) === -1);
