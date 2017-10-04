function countOccurrences(words) {
  var counts = {}
  words.forEach(function (word) {
    counts[word] = counts[word] || 0;
    counts[word]++;
  });
  Object.keys(counts).forEach (function (word) {
    console.log(word + ' => ' + counts[word]);
  });
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);