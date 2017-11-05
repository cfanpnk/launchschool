$(function() {
  var form = $('form');
  var input = $("#key");
  var keyCode;
  $('form').on('submit', function(e) {
    e.preventDefault();
    keyCode = $('#key').val().charCodeAt(0);
  });

  $(document).off('keypress').on('keypress', function(e) {
    if (e.which !== keyCode) {
      return;
    }
    $('a').trigger('click');
  });

  $('a').on('click', function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();    
  });
});