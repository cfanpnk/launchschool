function myBind(func, ctx) {
  var partialArgs = [].slice.call(arguments, 2)

  return function() {
    var remainingArgs = [].slice.call(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
