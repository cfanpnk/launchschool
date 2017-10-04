function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

console.log('Teddy is ' + getRandomIntInclusive(20, 200) + ' years old!');