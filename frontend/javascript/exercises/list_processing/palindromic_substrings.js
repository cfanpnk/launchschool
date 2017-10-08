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

function isPalindrom(string) {
  if (string.length === 1) {
    return false;
  } else {
    return string.split('').reverse().join('') === string;
  }
}

function palindromes(string) {
  var allSubstrings = substrings(string);
  return allSubstrings.filter(isPalindrom);
}

console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // ['madam', 'ada']
console.log(palindromes('hello-madam-did-madam-goodbye'));
// result
[ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo' ]

console.log(palindromes('knitting cassettes'));
// result
[ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]