$(function() {
  var categories = [{
    "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
  }];

  $('form').on('change', function(e) {
    var $changed = $(e.target);
    var changedCategory = $(e.target).val();
    var changedState = $changed.is(":checked");
    var changedIds = [];
    var $lis = $('main li');
    var categoryItems = categories.filter(function(item) {
      return item.category === changedCategory;
    });

    categoryItems.forEach(function(item) {
      $lis.filter('[data-id=' + item.id + ']').toggle(changedState);
    });
  })
})