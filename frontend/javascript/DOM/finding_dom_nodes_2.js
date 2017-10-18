function walk(node, callback) {
  callback(node);
  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// Not using CSS Selectors
// function addClassToElements(elements, className) {
//   var elementsArray = Array.prototype.slice.call(elements);
//   elementsArray.forEach(function(element) {
//     var paragraphElements = element.getElementsByTagName('p');
//     var paragraphElementsArray = Array.prototype.slice.call(paragraphElements);
//     paragraphElementsArray.forEach(function(paragraphElement) {
//       paragraphElement.classList.add(className);
//     });
//   });
// }

// Using CSS Selectors
// function addClassToElements(elements, className) {
//   var elementsArray = Array.prototype.slice.call(elements);
//   elementsArray.forEach(function(element) {
//     element.classList.add(className);
//   });
// }

// var paragraphElements = document.querySelectorAll('.intro p');
// addClassToElements(paragraphElements, 'article-text');