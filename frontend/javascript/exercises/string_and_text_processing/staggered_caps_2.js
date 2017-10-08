function staggeredCase(string) {
  var count = -1;
  return string.split('').map(function (char) {
    if (char.match(/[a-z]/i)) {
      count++;
    }
    if (count % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');     // 'I lOvE lAuNcH sChOoL!'
console.log(staggeredCase('ALL CAPS') === 'AlL cApS');                  // 'AlL cApS'
console.log(staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'); // 'IgNoRe 77 ThE 444 nUmBeRs'