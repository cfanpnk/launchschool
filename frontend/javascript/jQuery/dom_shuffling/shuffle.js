$(function() {
  var $header = $('body > header');
  var $title = $('#title');
  var $chinStick = $('#chin_stick');
  var $babyMop = $('#baby_mop');
  var $chinStickCaption = $('#chin_stick_caption');
  var $babyMopCaption = $('#baby_mop_caption');
  var $article = $('article');

  $header.prependTo($('body'));
  $title.prependTo($header);
  $chinStick.insertBefore($babyMop);
  $babyMopCaption.appendTo($babyMop);
  $chinStickCaption.appendTo($chinStick);
  $chinStick.appendTo($article);
  $babyMop.appendTo($article);
});