var phrase = prompt("Please write a phrase:");
var count = phrase.replace(/[^a-zA-Z]+/g, '').length.toString();
console.log('There are ' + count + ' characters in ' + '"' + phrase + '"');