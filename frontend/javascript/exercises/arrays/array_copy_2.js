var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

// var myOtherArray = [];
// for (var i = 0; i < myArray.length; i += 1) {
//   myOtherArray[i] = myArray[i];
// }

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);