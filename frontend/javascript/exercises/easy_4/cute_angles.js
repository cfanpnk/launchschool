var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;
var DEGREE_SYMBOL = '\u{00B0}';
function padStart(str, size, char) {
  if (size <= str.length) {
    return str;
  } else {
    return char.repeat(size - str.length) + str;
  }
}

function dms(angle) {
  var result = '';
  var isPositive = true;
  if (angle < 0) {
    angle = Math.abs(angle);
    isPositive = false;
  }
  var actualDegrees = Math.floor(angle);
  var decimalNumberOfDegrees = angle - actualDegrees;
  var minutes = decimalNumberOfDegrees * MINUTES_PER_DEGREE;
  var actualMinutes = Math.floor(minutes);
  var decimalNumberOfMinutes = minutes - actualMinutes;
  var actualSeconds = Math.floor(decimalNumberOfMinutes * SECONDS_PER_MINUTE);
  result = actualDegrees + DEGREE_SYMBOL + 
           padStart(String(actualMinutes), 2, '0') + "'" + 
           padStart(String(actualSeconds), 2, '0') + '"';
  if (isPositive) {
    return result;
  }
  return '-' + result;
}

console.log(dms(30));        // 30°00'00"
console.log(dms(76.73));     // 76°43'48"
console.log(dms(254.6));     // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0));         // 0°00'00"
console.log(dms(360));       // 360°00'00" or 0°00'00"
console.log(dms(-360));       // -360°00'00"
console.log(dms(-76.73));     // -76°43'48"
