var paragraph = document.createElement('p');
paragraph.textContent = 'This is a test.';
document.body.appendChild(paragraph);

var paragraph2 = paragraph.cloneNode(true);
document.body.appendChild(paragraph2);
