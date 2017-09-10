// Requirements:
// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Algorithms:
// 1. Map the original array to a new array
// 2. For each element of the new array, return a new object with the correct data
var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(bandName) {
  var result;
  var bandNameArr = bandName.split(' ');
  result = bandName.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
  return result;
}

function removeDots(bandName) {
  return bandName.replace(/\./, '');
}

function processBands(data) {
  result = [];
  result = data.map(function(band) {
    return {
      name: capitalize(removeDots(band.name)),
      country: 'Canada',
      active: band.active
    };
  });
  return result;
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]