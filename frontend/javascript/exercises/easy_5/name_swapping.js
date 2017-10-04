function swapName(name) {
  // var nameArray = name.split(' ');
  // var firstName = nameArray[0];
  // var lastName = nameArray[1];
  // return lastName + ', ' + firstName;
  var nameArray = name.split(' ');
  var lastName = nameArray.slice(-1).join('');
  var firstNames = nameArray.slice(0, -1).join(' ');
  return lastName + ', ' + firstNames;
}

console.log(swapName('Joe Roberts')); // 'Roberts, Joe'
console.log(swapName('Nankai Yuwen Pan')); // 'Roberts, Joe'