$(function() {
  var $form = $('form');
  var $ul = $('ul');
  $form.on('submit', function(e) {
    var itemName = $form.find('#name').val();
    var quantity = $form.find('#quantity').val() || 1;

    e.preventDefault();
    $('ul').append('<li>' + String(quantity) + ' ' + itemName + '</li>');

    $form.get(0).reset();
  });
});