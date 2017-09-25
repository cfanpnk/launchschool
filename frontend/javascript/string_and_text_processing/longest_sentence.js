var longText = "What's up, Doc? Hey there!";

// Algorithm:
// 1. Remove ',' and '--' from the text
// 2. Split the text with sentence-ending characters '.', '!', '?'
// 3. Use reduce to get the max length sentence 
function longestSentence(text) {
  var sentences = text.trim().split(/([.!?])\s/);
  console.log(sentences);
  var wordCount = 0;
  var longestSentence = sentences.reduce(function (longest, sentence) {
    var words = sentence.split(' ');
    var longestWords = longest.split(' ');
    return words.length > longestWords.length ? sentence : longest;
  });
  wordCount = longestSentence.split(' ').length;
  console.log(longestSentence);
  console.log();
  console.log('The longest sentence has ' + wordCount + ' words.');
}

longestSentence(longText);