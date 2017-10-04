function swap(str) {
  words = str.split(' ');
  return words.map(function (word) {
    var wordArr = word.split('');
    var temp = wordArr[0];
    wordArr[0] = wordArr[word.length - 1];
    wordArr[word.length - 1] = temp;
    return wordArr.join('');
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));    // 'hO thaw a londerfuw yad ti si'
console.log(swap('Abcde'));                            // 'ebcdA'
console.log(swap('a'));                                // 'a'