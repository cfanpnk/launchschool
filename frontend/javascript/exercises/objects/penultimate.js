function penultimate(string) {
  return string.split(' ').slice(-2)[0];
}

console.log(penultimate('last word') === 'last')              // 'last'
console.log(penultimate('Launch School is great!') === 'is') // 'is'