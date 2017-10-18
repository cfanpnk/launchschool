// Question 2:
// a = 10;
// console.log(window.a === a); // true

// Question 3:
// function func() {
//   var b = 1;
// }

// func();
// console.log(b); // ReferenceError: b is not defined

// Question 4:
// function func() {
//   b = 1;
// }

// func();
// console.log(b);

// Question 5:
// var a = 1;
// b = 'Hi there';
// var c = '-50';

// console.log(delete a); // => false
// console.log(delete b); // => true
// console.log(delete c); // => false

// Question 6:
// function func() {
//   console.log("I'm a function!");
// }

// console.log(delete func); // => false


// Question 7:
window.a = 1;
b = 2;
var c = b;

console.log(delete window.a); // => true
console.log(delete window.b); // => true
console.log(delete window.c); // => false