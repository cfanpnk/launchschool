function reverseWords(words) {
  var wordsArray = words.split(' ');
  var reverseWordArray = wordsArray.map(function (word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word;
    }
  });
  return reverseWordArray.join(' ');
}

console.log(reverseWords('Professional') === 'lanoisseforP');          // lanoisseforP
console.log(reverseWords('Walk around the block') === 'Walk dnuora the kcolb'); // Walk dnuora the kcolb
console.log(reverseWords('Launch School') === 'hcnuaL loohcS');         // hcnuaL loohcS