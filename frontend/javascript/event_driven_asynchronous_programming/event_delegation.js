document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    var message = document.getElementById('message');
    message.textContent = event.target.textContent + " was clicked!";
  }
});