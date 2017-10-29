document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');
  var focusedTextField;
  var content = document.querySelector('.content');
  var cursorID;
  var string = '';  
  var newString = '';
  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorID = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
    focusedTextField = document.querySelector('.text-field.focused');
  });

  document.addEventListener('click', function(event) {
    textField.classList.remove('focused');
    clearInterval(cursorID);
    textField.classList.remove('cursor');
    focusedTextField = null;
  });

  document.addEventListener('keyup', function(event) {
    if (focusedTextField) {
      if (event.keyCode === 8) {
        content.textContent = content.textContent.substr(0, string.length - 1);;
      } else {
        string += event.key;
        content.textContent += event.key;
      }
    }
  });
});
