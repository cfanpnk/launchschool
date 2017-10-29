// https://launchschool.com/lessons/5029c56a/assignments/1124c8ed

// Question 1:
// document.addEventListener('click', function(event) {
//   var x = document.getElementsByClassName('x')[0]
//   x.style.top = String(event.clientY) + 'px';
//   x.style.left = String(event.clientX) + 'px';
// });

// Question 2:
// document.addEventListener('mousemove', function(event) {
//   var x = document.getElementsByClassName('x')[0]
//   x.style.top = String(event.clientY) + 'px';
//   x.style.left = String(event.clientX) + 'px';
// });

// Question 3:
// document.addEventListener('keyup', function(event) {
//   var horizontal = document.querySelector('.horizontal');
//   var vertical = document.querySelector('.vertical');
//   if (event.key === 'b') {
//     horizontal.style.background = 'blue';
//     vertical.style.background = 'blue';
//   } else if (event.key === 'g') {
//     horizontal.style.background = 'green';
//     vertical.style.background = 'green';
//   } else if (event.key === 'r') {
//     horizontal.style.background = 'red';
//     vertical.style.background = 'red';
//   }
// });

// Question 4:
document.addEventListener('DOMContentLoaded', function() {
  var textarea = document.querySelector('textarea');
  var message = document.querySelector('.counter');
  var button = document.querySelector('button');
  var remaining = 0;
  var LIMIT = 140;
  var count = 0
  textarea.addEventListener('keyup', function(event) {
    remaining = LIMIT - Number(textarea.textLength);
    message.textContent = String(remaining) + ' characters remaining';
    if (remaining < 0) {
      button.disabled = true;
      textarea.classList.add('invalid');
    } else {
      button.disabled = false;
      textarea.classList.remove('invalid');
    }
  });
});
