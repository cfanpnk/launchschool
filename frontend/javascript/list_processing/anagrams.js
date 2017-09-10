// Algorithm:
// 1. Iterate through the list and sort each word
// 2. If the sorted word equals to the original word, then add it to the result array
function areAnagrams(word, candidate) {
  var sorted_word = word.split('').sort().join('');
  var sorted_candidate = candidate.split('').sort().join('');
  return sorted_word === sorted_candidate
}

function anagram(word, list) {
  var result = [];
  result = list.filter(function(candidate) {
    return areAnagrams(word, candidate);
  });
  return result;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]