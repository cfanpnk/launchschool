function wordSizes(str) {
  var words = str.split(/\s+/);
  var wordCount = {};
  words.forEach(function (word) {
    var length = word.length.toString();
    if (length === '0') {
      return wordCount
    } else if (Object.keys(wordCount).indexOf(length) >= 0) {
      wordCount[length] += 1;
    } else {
      wordCount[length] = 1;
    }
  });
  return wordCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes('What\'s up doc?'));                             // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));                                            // {}
console.log(wordSizes('Four   score  and      seven.'));               // { "3": 1, "4" : "1", "5": 1, "6": 1 }