// Question 1:
// function getWordCountForH2() {
//   var h2Elements = document.getElementsByTagName('H2');
//   for (var i = 0; i < h2Elements.length - 1; i++) {
//     var h2Element = h2Elements[i];
//     var h2TextContent = h2Element.textContent;
//     var wordCount =h2TextContent.trim().split(' ').length;
//     console.log(h2TextContent + ': ' + String(wordCount));
//   }
// }

// getWordCountForH2();

// Question 2:
// var divContents = document.getElementById('toc');
// var divContents = document.querySelector('#toc');
// var divContents = document.querySelectorAll(".toc")[0];
// console.log(divContents);

// Question 3:
// var toc = document.querySelectorAll('#toc li a');
// for (var i = 0; i < toc.length - 1; i += 2) {
//   var link = toc[i];
//   link.style.color = 'green';
// }

// Question 4:
// var thumbnailCaptions = document.querySelectorAll('.thumbcaption');
// var thumbnailCaptionsArray = [];
// for (var i = 0; i < thumbnailCaptions.length - 1; i++) {
//   thumbnailCaptionsArray.push(thumbnailCaptions[i].textContent.trim());
// }
// console.log(thumbnailCaptionsArray);

// Question 5:
function getScientificClassification() {
  var classification = {
    Kingdom: '',
    Phylum: '',
    Class: '',
    Order: '',
    Suborder: '',
    Family: '',
    Genus: '',
    Species: ''
  }
  var ranks = Object.keys(classification);
  var tds = document.querySelectorAll('.infobox td');
  for (var i = 0; i < tds.length; i++) {
    var td = tds[i];
    var rank = td.textContent.slice(0, -1);
    console.log('rank: '  + rank);
    var index = ranks.indexOf(rank);
    console.log('index: ' + index);
    if (index !== -1) {
      var group = td.nextElementSibling.textContent;
      console.log(group);
      classification[rank] = group;
    }
  }
  return classification;
}

console.log(getScientificClassification());