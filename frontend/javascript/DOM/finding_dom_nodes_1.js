function walk(node, callback) {
  callback(node);
  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

function getElementsByTagName(tagName) {
  var elements = [];
  walk(document, function(node) {
    if (node.nodeName === tagName.toUpperCase()) {
      elements.push(node);
    }
  });
  return elements;
}

console.log(getElementsByTagName('p'));
