function cleanUp(words) {
  return words.replace(/[^a-zA-Z]+/g, ' ');
}

console.log(cleanUp('---what\'s my +*& line?'));