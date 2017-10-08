function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }
  if (array.length === 0) {
    return [];
  }
  return array.slice(1).concat(array[0]);
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));   // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));     // ['b', 'c', 'a']
console.log(rotateArray(['a']));               // ['a']
console.log(rotateArray([1, 'a', 3, 'c']));;    // [ 'a', 3, 'c', 1 ]
console.log(rotateArray([{a: 2}, [1, 2], 3]));; // [ [1, 2], 3, {a: 2} ]
console.log(rotateArray([]));                   // []

// return undefined if the argument is not an array
console.log(rotateArray());                    // undefined
console.log(rotateArray(1));                   // undefined


// the input array is not mutated
x = [1, 2, 3, 4]
rotateArray(x)                  // [2, 3, 4, 1]
console.log(x)                  // [1, 2, 3, 4]