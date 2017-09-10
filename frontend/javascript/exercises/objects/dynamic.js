var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // 678
console.log(myObject.prop2);  // 456

var myObj = {};
myObj[myFunc()] = 'hello, ';
function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);