// Question 6:
// var a = 1;

// function bar() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: bar
// };

// obj.foo(); // 2

// Question 7:
foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  }
};

foo.bar(); // [object: foo]
var qux = foo.bar; 
qux(); // this.baz is not a function
