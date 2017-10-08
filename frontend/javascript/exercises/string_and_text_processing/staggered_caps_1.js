function staggeredCase(string) {
  return string.split('').map(function (char, index) {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!') === 'I LoVe lAuNcH ScHoOl!');     // 'I LoVe lAuNcH ScHoOl!'
console.log(staggeredCase('ALL_CAPS') === 'AlL_CaPs')                  // 'AlL_CaPs'
console.log(staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 NuMbErS'); // 'IgNoRe 77 ThE 444 NuMbErS'