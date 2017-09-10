function concat(array1, secondArgument) {
  var result = array1.slice();
  var i;

  if (typeof(secondArgument) === 'object' && Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i += 1) {
      result.push(secondArgument[i]);
    }
  } else {
    result.push(secondArgument);
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));            // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                       // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));        // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                  // [2, 3, "four"]

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);                   // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                                // [2, 3, { a: 'two', b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
obj.b = 'three';
console.log(arr3);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

arr3[5].b = 3;                                        // or arr3[5]['b'] = 3
console.log(obj);                                     // { a: 'two', b: 3 }
