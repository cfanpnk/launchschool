function substringsAtStart(string) {
  return string.split('').map(function (char, index) {
    return string.substring(0, index + 1);
  });
}

console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
console.log(substringsAtStart('a'));     // ['a']
console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']