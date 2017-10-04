function doubleConsonants(sentence) {
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[aeiou\d,.!-\s]/i)) {
      result += sentence[i];
    } else {
      result += sentence[i] + sentence[i];
    }
  }
  return result;
}

console.log(doubleConsonants('String'));       // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
console.log(doubleConsonants(''));             // ""