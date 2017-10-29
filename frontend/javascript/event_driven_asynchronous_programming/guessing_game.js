document.addEventListener('DOMContentLoaded', function() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  function newGame() {
    var message = 'Please guess a number between 1 and 100';    
    answer = getRandomIntInclusive(1, 100);
    paragraph.textContent = message;
    textbox.value = '';
  }
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


  var answer = getRandomIntInclusive(1, 100);
  var form = document.querySelector('form');
  var link = document.querySelector('a');
  var paragraph = document.querySelector('p');
  var textbox = document.querySelector('#guess');
  var button = document.querySelectorAll('input')[1];
  var guesses = 0;
  form.addEventListener('submit', function(event) {
    console.log(button);
    var value = textbox.value;
    var guess;
    var message = '';    
    if (isNumeric(value)) {
      guess = parseInt(textbox.value, 10);
    } else {
      message = 'Please enter a number';
    }
    event.preventDefault();
    guesses++;
    if (guess > answer) {
      message = 'The answer is lower than the guess.';
    } else if (guess < answer) {
      message = 'The answer is higher than the guess.';
    } else if (guess === answer) {
      message = 'It is correct! You used ' + String(guesses) + ' guesses.';
      button.disabled = true;
    }
    paragraph.textContent = message;
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });

  newGame();
});
