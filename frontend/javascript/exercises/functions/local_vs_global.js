var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();

console.log(myVar); // This is global