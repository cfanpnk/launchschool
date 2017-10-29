$(function() {
  var $p = $('p');
  var OUTPUT = 'Your favorite fruit is ';

  $('a').click(function(e) {
    e.preventDefault();
    var $e = $(this);
    $p.text(OUTPUT + $e.text());
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var $input = $(this).find('input[type=text]');
    $p.text(OUTPUT + $input.val());
  });
});