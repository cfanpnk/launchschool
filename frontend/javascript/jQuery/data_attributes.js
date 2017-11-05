$(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
  
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });
});
