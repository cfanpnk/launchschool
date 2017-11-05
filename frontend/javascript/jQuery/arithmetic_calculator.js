// jQuery version
$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var numerator = Number($('#numerator').val());
    var denominator = Number($('#denominator').val());
    var operator = $('#operator').val();
    var result = 0;
    if (operator === '+') {
      result = numerator + denominator
    } else if (operator === '-') {
      result = numerator - denominator
    } else if (operator === '/') {
      result = numerator / denominator
    } else if (operator === '*') {
      result = numerator * denominator
    }
    $('h1').text(String(result));            
  });
});

// Pure javascript version
// function $(id_selector) {
//   return document.getElementById(id_selector);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   $('calculator').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var numerator = Number($('numerator').value);
//     var denominator = Number($('denominator').value);
//     var operator = $('operator').value;
//     var result = 0;
//     if (operator === '+') {
//       result = numerator + denominator
//     } else if (operator === '-') {
//       result = numerator - denominator
//     } else if (operator === '/') {
//       result = numerator / denominator
//     } else if (operator === '*') {
//       result = numerator * denominator
//     }
//     $('result').textContent = (String(result));  
//   });
// });