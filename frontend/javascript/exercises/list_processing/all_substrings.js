function substringsAtStart(string) {
  return string.split('').map(function (char, index) {
    return string.substring(0, index + 1);
  });
}

function substrings(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var currentStr = string.substring(i);
    result = result.concat(substringsAtStart(currentStr));
  }
  return result;
}

console.log(substrings('abcde'));