function getSuffix(centuryNumber) {
  var centuryStr = centuryNumber.toString();
  if (centuryStr.endsWith('11') || centuryStr.endsWith('12') || centuryStr.endsWith('13')) {
    return 'th';
  } else if (centuryStr.endsWith('1')) {
    return 'st';
  } else if (centuryStr.endsWith('2')) {
    return 'nd';
  } else if (centuryStr.endsWith('3')) {
    return 'rd';
  } else {
    return 'th';
  }
}
function century(year) {
  var centuryNumber = Math.ceil(year / 100);
  var suffix = getSuffix(centuryNumber);
  return centuryNumber + suffix;
}

console.log(century(2000) === '20th');        // '20th'
console.log(century(2001) === '21st');        // '21st'
console.log(century(1965) === '20th');        // '20th'
console.log(century(256) === '3rd');         // '3rd'
console.log(century(5) === '1st');           // '1st'
console.log(century(10103) === '102nd');       // '102nd'
console.log(century(1052) === '11th');        // '11th'
console.log(century(1127) === '12th');        // '12th'
console.log(century(11201) === '113th');       // '113th'