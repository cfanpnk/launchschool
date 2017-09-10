function objectHasProperty(object, property) {
  var keys = Object.keys(object);
  return keys.indexOf(property) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};
console.log(objectHasProperty(pets, 'dog') === true);       // true
console.log(objectHasProperty(pets, 'lizard') === false);    // false
console.log(objectHasProperty(pets, 'mice') === true);      // true

function incrementProperty(object, property) {
  if (object[property]) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }
}

var wins = {
  steve: 3,
  susie: 4,
};
incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }


function copyProperties(original, destination) {
  var count = 0
  for (var key in original) {
    destination[key] = original[key];
    count++;
  }
  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
console.log(copyProperties(hal, sal) === 2);  // 2
console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(str) {
  var result = {};
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (result[words[i]]) {
      result[words[i]] += 1;
    } else {
      result[words[i]] = 1;
    }
  }
  return result;
}

console.log(wordCount('box car cat bag box'));    // { box: 2, car: 1, cat: 1, bag: 1 }