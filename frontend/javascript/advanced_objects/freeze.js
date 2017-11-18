var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func: function() {
    console.log('I\'m frozen');
  }
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // 4
console.log(frozen.string);       // String
console.log(frozen.array);        // [1, 2]
console.log(frozen.object.foo);   // baz
frozen.func();                    // I'm frozen