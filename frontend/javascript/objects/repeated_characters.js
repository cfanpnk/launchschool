function repeatedCharacters(text) {
  var counts = {};
  var result = {};
  var string = text.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (counts[string[i]]) {
      counts[string[i]]++;
    } else {
      counts[string[i]] = 1;
    }
  }
  for (var key in counts) {
    if (counts[key] >= 2) {
      result[key] = counts[key];
    }
  }
  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }