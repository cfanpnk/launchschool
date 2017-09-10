var MILLISECONDS_PER_MINUTES = 60000;
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var midnight = new Date(2017, 1, 1, 0, 0);
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0]);
  var minutes = parseInt(timeComponents[1]);
  var afterMidnight = new Date(2017, 1, 1, hours, minutes);
  var msOffset = afterMidnight.getTime() - midnight.getTime();
  return msOffset / MILLISECONDS_PER_MINUTES;
  var afterMidnight = new Date('2017/1/1')
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight('00:00') === 0);        // 0
console.log(beforeMidnight('00:00') === 0);       // 0
console.log(afterMidnight('12:34') === 754);        // 754
console.log(beforeMidnight('12:34') === 686);       // 686