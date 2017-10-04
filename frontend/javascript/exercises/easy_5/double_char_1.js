function repeater(sentence) {
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    result += sentence[i] + sentence[i];
  }
  return result;
}

console.log(repeater('Hello'));     // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater(''));          // ''