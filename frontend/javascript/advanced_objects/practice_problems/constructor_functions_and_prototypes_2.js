// Question 1:
var shape = {
  type: '',
  getType: function() {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"

// Question 2:
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }
  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe

// Question 3:
function createObject(obj) {
  var Obj = function() {};
  Obj.prototype = obj;
  return new Obj();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true

// Question 4:
var foo = {
  a: 1
};

Object.prototype.begetObject = function() {
  var Obj = function() {};
  Obj.prototype = this;
  return new Obj();
};


var bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true


// Question 5:
function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  return result === undefined ? object : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();                       // Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}