function outputUpper(n) {
  var numberOfLines = Math.floor(n / 2);
  for (var i = numberOfLines - 1; i >= 0 ; i--) {
    var numberOfSpacesBetween = i;
    var numberOfSpacesBefore = numberOfLines - 1 - i;
    console.log(' '.repeat(numberOfSpacesBefore) + '*' + ' '.repeat(numberOfSpacesBetween) + 
                '*' + ' '.repeat(numberOfSpacesBetween) + '*');
  }
  console.log('*'.repeat(n));
}

function outputLower(n) {
  var numberOfLines = Math.floor(n / 2);
  for (var i = 0; i <= numberOfLines - 1 ; i++) {
    var numberOfSpacesBetween = i;
    var numberOfSpacesBefore = numberOfLines - 1 - i;
    console.log(' '.repeat(numberOfSpacesBefore) + '*' + ' '.repeat(numberOfSpacesBetween) + 
                  '*' + ' '.repeat(numberOfSpacesBetween) + '*');
  }
}

function star(n) {
  if (n % 2 === 0) {
    console.log('N has to be an odd integer.');
    return;
  }
  if (n < 7) {
    console.log('N needs to be at least 7.');
    return;
  }
  outputUpper(n);
  outputLower(n);
}

star(7);

star(9);

star(10);

star(5);