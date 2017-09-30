function lightsOn(switches) {
  var lights = {};
  var i;
  var result = [];
  for (i = 1; i <= switches; i++) {
    lights[i] = false;
  }
  for (i = 1; i <= switches; i++) {
    var lightNumbers = Object.keys(lights).map(Number);
    for (j = i - 1; j < switches; j += i) {
      lights[lightNumbers[j]] = !lights[lightNumbers[j]];
    }
  }
  Object.keys(lights).forEach(function (number) {
    if (lights[number]) {
      result.push(number);
    }
  });
  return result.map(Number);
}

console.log(lightsOn(5));   // [1, 4];
console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]