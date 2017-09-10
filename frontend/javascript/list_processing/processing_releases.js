// Requirements:
// Keep only releases that have both id and title data present.
// Keep only the id and title data for each release.
// Algorithms:
// 1. Iterate through the array
// 2. Iterate through the object
// 3. If both id and title data present, push this object to the new array
// 4. For each object, only keep the id and title
function objectHasProperty(object, property) {
  return Object.keys(object).indexOf(property) !== -1;
}

function processReleaseData(data) {
  var selectedRelease = [];
  var result = []
  selectedRelease = data.filter(function(release) {
    return objectHasProperty(release, 'id') && objectHasProperty(release, 'title');
  });
  result = selectedRelease.map(function(release) {
    return {
      id: release.id,
      title: release.title
    }
  });
  return result;
}

var newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
