var myArray = ['a', 'b', 'c'];
console.log(myArray[0]);   // a
console.log(myArray[-1]);  // undefined
myArray[-1] = 'd';         // ['a', 'b', 'c', '-1': 'd']
myArray['e'] = 5;          // ['a', 'b', 'c', '-1': 'd', 'e': 5]
myArray[3] = 'f';          // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]

console.log(myArray[-1]);  // d
console.log(myArray['e']); // 5
console.log(myArray);      // ['a', 'b', 'c', 'f', '-1': 'd', e: 5]