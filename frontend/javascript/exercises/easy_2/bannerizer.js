function logInBox(message) {
  var i;
  var numberOfDash = message.length + 2;
  var numberOfSpace = message.length + 2;
  var firstLine = '+' + '-'.repeat(numberOfDash) + '+';
  var secondLine = '|' + ' '.repeat(numberOfSpace) + '|';
  var thirdLine = '|' + ' ' + message + ' ' + '|';
  for (i = 1; i <= 5; i++) {
    if (i === 1 || i === 5) {
      console.log(firstLine);
    } else if (i === 2 || i === 4) {
      console.log(secondLine);
    } else {
      console.log(thirdLine);
    }
  }
}

logInBox('To boldly go where no one has gone before.');
logInBox('');