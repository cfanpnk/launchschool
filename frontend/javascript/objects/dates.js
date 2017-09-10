var today = new Date();
console.log(today);

function getDayOfWeek() {
  var today = new Date();
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function getDayOfMonth() {
  var today = new Date();
  return today.getDate().toString();
}

console.log("Today is " + getDayOfWeek() + ', the ' + getDayOfMonth() + 'th');

// 1st, 2nd, 3rd, 4th, 5th...
// 11th, 12th, 13th, 14th...
// 21th, 22nd, 23rd, 24th...
function dateSuffix(dayOfMonth) {
  var lastNumber = dayOfMonth % 10;
  var suffix = '';
  switch (lastNumber) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }
  if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    suffix = 'th';
  }
  return dayOfMonth.toString() + suffix;
}


console.log(dateSuffix(1) === '1st');
console.log(dateSuffix(4) === '4th');
console.log(dateSuffix(11) === '11th');
console.log(dateSuffix(14) === '14th');
console.log(dateSuffix(21) === '21st');
console.log(dateSuffix(22) === '22nd');
console.log(dateSuffix(23) === '23rd');
console.log(dateSuffix(24) === '24th');


function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  return "Today's date is " + formattedDay(date) + ', ' + formattedMonth(date) + ' ' +  dateSuffix(date.getDate());
}

var today = new Date();
console.log(formattedDate(today));

console.log(today.getTime());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));


var nextWeek = new Date(today.getTime());
console.log(nextWeek.toDateString() === today.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString());

// console.log(today.toString());
function formatTime(date) {
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  return hours + ':' + minutes;
}

console.log(formatTime(new Date(2017, 8, 27, 1, 9)));








