$(function() {
  $("#team li > a").on("click", function(e) {
    e.preventDefault();
    var $e = $(this);

    $e.siblings(".modal").css({
      top: $(window).scrollTop() + 30
    });

    $e.nextAll("div").fadeIn(400);
  });

  $(".modal_layer, a.close").on("click", function(e) {
    e.preventDefault();

    $(".modal_layer, .modal").filter(":visible").fadeOut(400);
  });
});