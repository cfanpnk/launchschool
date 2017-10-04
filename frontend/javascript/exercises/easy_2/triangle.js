function repeatChar(char, times) {
  result = '';
  var i;
  for (i = 0; i < times; i++) {
    result += char;
  }
  return result;
}

function triangle(n) {
  var i;
  for (i = 1; i <= n; i++) {
    var numberOfStars = i;
    var numberOfSpaces = n - i;
    console.log(repeatChar(' ', numberOfSpaces) + repeatChar('*', numberOfStars));
  }
}

triangle(5);
triangle(9);