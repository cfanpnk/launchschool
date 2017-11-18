// Question 1:
// var foo = {};
// var bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1

// Question 2:
var foo = {};
var bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a); // 2