function pop(array) {
  var length = array.length;
  var result = array[length - 1];
  if (length === 0) {
    return undefined;
  }
  array.length = length - 1;
  return result;
}

function push(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

var array = [1, 2, 3];
console.log(pop(array) === 3);
console.log(array);                         // [1, 2]
console.log(pop([]) === undefined);                   
console.log(pop([1, 2, ['a', 'b', 'c']]));  // [ 'a', 'b', 'c' ]

array = [1, 2, 3];
console.log(push(array, 4, 5, 6) === 6);         // 6
console.log(array);                             // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']) === 3);     // 3
console.log(push([], 1) === 1);                  // 1
console.log(push([]) === 0);                     // 0

