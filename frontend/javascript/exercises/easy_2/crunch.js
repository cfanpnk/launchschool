function crunch(str) {
  var strArr = str.split('');
  var i;
  var result = [];
  var prev = strArr[0];
  result.push(prev);
  for (i = 1; i < strArr.length; i++) {
    if (strArr[i] !== prev) {
      result.push(strArr[i]);
    }
    prev = strArr[i];
  }
  return result.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
console.log(crunch('4444abcabccba'));                  // '4abcabcba'
console.log(crunch('ggggggggggggggg'));                // 'g'
console.log(crunch('a'));                              // 'a'
console.log(crunch(''));                               // ''