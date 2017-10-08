function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function minilang(input) {
  var stack = [];
  var register = 0;
  input.split(' ').forEach(function (operation) {
    if (isNumber(operation)) {
      register = Number(operation);
    } else if (operation === 'PUSH') {
      stack.push(register);
    } else if (operation === 'ADD') {
      register += stack.pop();
    } else if (operation === 'SUB') {
      register -= stack.pop();
    } else if (operation === 'MULT') {
      register *= stack.pop();
    } else if (operation === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (operation === 'MOD') {
      register = Math.floor(register % stack.pop());
    } else if (operation === 'POP') {
      register = stack.pop();
    } else if (operation === 'PRINT') {
      console.log(register);
    }
  });
}

minilang('PRINT')
// 0

minilang('5 PUSH 3 MULT PRINT')
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
// 5
// 3
// 8

minilang('5 PUSH POP PRINT')
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
// 12

minilang('-3 PUSH 5 SUB PRINT')
// 8

minilang('6 PUSH')
// (nothing printed; no PRINT commands)
