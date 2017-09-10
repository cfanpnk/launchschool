var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {  // trusy
  console.log('Hello'); 
}

if (!myString) { // falsy
  console.log('World'); 
}

if (!!myArray) { // trusy
  console.log('World');
}

if (myOtherString || myArray) { // truthy
  console.log('!');
}