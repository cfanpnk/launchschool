function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isLeapYear(2016) === true);     // true
console.log(isLeapYear(2015) === false);     // false
console.log(isLeapYear(2100) === false);     // false
console.log(isLeapYear(2400) === true);     // true
console.log(isLeapYear(240000) === true);   // true
console.log(isLeapYear(240001) === false);   // false
console.log(isLeapYear(2000) === true);     // true
console.log(isLeapYear(1900) === false);     // false
console.log(isLeapYear(1752) === true);     // true
console.log(isLeapYear(1700) === true);     // true
console.log(isLeapYear(1) === false);        // false
console.log(isLeapYear(100) === true);      // true
console.log(isLeapYear(400) === true);      // true