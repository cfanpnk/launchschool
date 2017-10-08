function wordLengths(sentence) {
  if (sentence.length === 0) {
    return [];
  }
  return sentence.split(' ').map(function (word) {
    return word + ' ' + word.length;
  });
}


console.log(wordLengths('cow sheep chicken'));
// result
['cow 3', 'sheep 5', 'chicken 7']

console.log(wordLengths('baseball hot dogs and apple pie'));
// result
['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

console.log(wordLengths('It ain\'t easy, is it?'));
// result
['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// result
['Supercalifragilisticexpialidocious 34']

console.log(wordLengths(''));
// result
[]