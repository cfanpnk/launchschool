function diamond(n) {
  var i;
  var j;
  var numberOfSpaces;
  var numberOfStars;
  var prev = -1;
  for (i = 1; i <= Math.ceil(n / 2); i++) {
    numberOfSpaces = Math.ceil(n / 2) - i;
    numberOfStars = prev + 2;
    prev = numberOfStars;
    console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));
  }
  prev = n;
  for (j = 1; j <= Math.floor(n / 2); j++) {
    numberOfSpaces = j;
    numberOfStars = prev - 2;
    prev = numberOfStars;
    console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));    
  }
}

diamond(3);
diamond(5);
diamond(9);
