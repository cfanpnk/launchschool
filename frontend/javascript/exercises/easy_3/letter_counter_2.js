function wordSizes(str) {
  var words = str.replace(/[^a-z\s]/gi, '').split(/\s+/);
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

console.log(wordSizes('Four score and seven.'));                       
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
console.log(wordSizes('What\'s up doc?'));                             
console.log(wordSizes(''));                                          
console.log(wordSizes('Four   score  and      seven.'));