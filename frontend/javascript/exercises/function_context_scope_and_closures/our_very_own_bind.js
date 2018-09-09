function myBind(function_to_bind, context) {
  return function() {
    return function_to_bind.call(context);
  }
}

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = myBind(unboundGetX, module)
console.log(boundGetX());
