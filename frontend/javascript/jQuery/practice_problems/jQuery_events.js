$(function() {
  var form = $('form');
  var input = $("#key");
  var key;
  $(form).on('submit', function(e) {
    e.preventDefault();
    key = $(input).val().charCodeAt(0);
  });

  $(document).off('keypress').on('keypress', function(e) {
    if (e.which !== key) {
      return;
    }
    $('a').trigger('click');
  });

  $('a').on('click', function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();    
  });
});