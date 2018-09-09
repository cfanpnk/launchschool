function newStack() {
  var stack = [];
  return {
    push: function(element) {
      stack.push(element);
    },
    pop: function() {
      stack.pop();
    },
    printStack: function() {
      stack.forEach(function(element) {
        console.log(element);
      });
    }
  }
}

var stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.printStack();
