$(function () {
  var $slideshow = $("#slideshow");
  var $nav = $slideshow.find("ul");
  
  $nav.on("click", function(e) {
    e.preventDefault();
    var $li = $(e.target).closest("li");
    var idx = $li.index();
    var $figures = $slideshow.find("figure");

    $figures.stop(true).filter(":visible").fadeOut(300);
    $figures.eq(idx).delay(300).fadeIn(300);
    
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  });
});