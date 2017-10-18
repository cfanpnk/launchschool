function greet(greeting, name) {
  var capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  var message = capitalized + ", " + name + "!";
  console.log(message);
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, "hello");
var sayHi = partial(greet, "hi");

sayHello("Brandon");
sayHi("Sarah");