function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));                 // 10
// This function was called by Victor.