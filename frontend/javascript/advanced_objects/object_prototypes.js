// Question 1:
var prot = {};
var foo = Object.create(prot);

// Question 2:
console.log(Object.getPrototypeOf(foo) === prot);

// Question 3:
console.log(prot.isPrototypeOf(foo));

// Question 4:
var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo);  // true
Object.prototype.isPrototypeOf(foo); // true