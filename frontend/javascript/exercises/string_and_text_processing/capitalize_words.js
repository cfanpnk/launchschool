function wordCap(sentence) {
  return sentence.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven') === 'Four Score And Seven');    // 'Four Score And Seven'
console.log(wordCap('the javaScript language') === 'The Javascript Language'); // 'The Javascript Language'
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word'); // 'This Is A "quoted" Word'