$(function() {
  var photos = {};
  var comments = {};
  var templates = {};
  var photosTemplate =  Handlebars.compile($('script#photos').html());
  var photoInfoTemplate = Handlebars.compile($('script#photo_information').html());
  var commentsTemplate = Handlebars.compile($('script#comments').html());
  var commentTemplate = Handlebars.compile($('script#comment').html());
  

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  var slideshow = {
    $element: $("#slideshow"),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$element.find('figure:visible');
      var $prev = $current.prev('figure');
      var prevIndex;
      if (!$prev.length) {
        $prev = this.$element.find("figure").last();
      }
      prevIndex = Number($prev.attr("data-id")) - 1;
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);

      renderPhotoInformation(prevIndex);
      getComments(prevIndex);
      $('[name=photo_id').val(prevIndex);

    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$element.find('figure:visible');
      var $next = $current.next("figure");
      var nextIndex;

      if (!$next.length) {
        $next = this.$element.find('figure').first();
      }
      nextIndex = Number($next.attr("data-id")) - 1;
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);

      renderPhotoInformation(nextIndex);
      getComments(nextIndex);
      $('[name=photo_id').val(nextIndex);      
    },
    bind: function() {
      this.$element.find('a.prev').on('click', this.prevSlide.bind(this));
      this.$element.find('a.next').on('click', this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
    }
  }

  function renderPhotos() {
    $('#slides').html(photosTemplate({ photos: photos }));
  }

  function renderPhotoInformation(index) {
    $('section header').html(photoInfoTemplate(photos[index]));
  }

  function getComments(id) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + id,
      success: function(json) {
        comments = json;
        $('#comments ul').html(commentsTemplate({ comments: comments}));
      }
    });
  }

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(0);
      slideshow.init();
      getComments(photos[0].id);
    }
  });

  $('section header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var $element = $(this);
    var photoId = $element.attr('data-id');
    var total;

    $.ajax({
      method: 'post',
      url: $element.attr('href'),
      data: {
        photo_id: photoId
      },
      success: function(json) {
        total = json.total;
        $element.text(function(index, txt) {
          return txt.replace(/\d+/, total);
        });
      }
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var fields = $(this).serialize();
    $.ajax({
      method: 'post',
      url: $(this).attr('action'),
      data: fields,
      success: function(json) {
        console.log(json);
        $('#comments ul').append(commentTemplate(json));
      }
    });
  });

});