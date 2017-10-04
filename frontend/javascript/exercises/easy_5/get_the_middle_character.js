function centerOf(string) {
  var length = string.length;
  if (length % 2 === 1) {
    return string[Math.floor(length / 2)];
  } else {
    return string.slice(Math.floor(length / 2) - 1, Math.floor(length / 2) + 1);
  }
}

console.log(centerOf('I love ruby') === 'e');     // 'e'
console.log(centerOf('Launch School') === ' ');   // ' '
console.log(centerOf('Launch') === 'un');         // 'un'
console.log(centerOf('Launchschool') === 'hs');   // 'hs'
console.log(centerOf('x') === 'x');               // 'x'