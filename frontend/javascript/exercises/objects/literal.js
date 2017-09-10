var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};
console.log(myObject[1]); // d
console.log(myObject[a]); // ReferenceError: a is not defined
console.log(myObject.a);  // name