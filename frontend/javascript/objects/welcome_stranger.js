function greetings(array, object) {
  var fullName = array.join(' ');
  console.log('Hello, ' + fullName + '! ' + 'Nice to have a ' + object.title + ' ' + object.occupation + ' around.');
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });