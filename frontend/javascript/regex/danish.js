function danish(str) {
   return str.replace(/(apple|blueberry|cherry)/, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'))
console.log(danish('My favorite is blueberry pie'));
console.log(danish('The cherry of my eye'));
console.log(danish('apple. cherry. blueberry.'));
console.log(danish('I love pineapple'));