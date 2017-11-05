$(function() {
  var $canvas = $('#canvas');

  function resetElement($div) {
    var data = $div.data();
    $div.css({
      left: Number(data.start_x),
      top: Number(data.start_y)
    });
  }

  function createElement(data) {
    var $div = $('<div>', {
      'class': data.shape_type,
      data: data
    });
    resetElement($div);
    return $div;
  }

  $('form').on('submit', function(e) {
    var inputs = [];
    var data = {};  

    e.preventDefault();
    inputs = $(this).serializeArray();
    inputs.forEach(function(input) {
      data[input.name] = input.value;
    });

    $canvas.append(createElement(data));
  });

  $('#animate').on('click', function(e) {
    e.preventDefault();
    var $shapes = $('#canvas div');
    $shapes.each(function() {
      resetElement($(this));
      $(this).animate({
        left: Number($(this).data('end_x')),
        top: Number($(this).data('end_y'))
      }, 1000);
    });
  })

  $('#stop').on('click', function(e) {
    e.preventDefault();
    var $shapes = $('#canvas div');
    $shapes.stop();
  });
});