function makeList() {
  var items = [];
  return {
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function (item) {
          console.log(item);
        });
      }
    },
    add: function(item) {
      items.push(item);
      console.log(item + ' added!');
    },
    remove: function(item) {
      var index = items.indexOf(item);
      if (index != -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    }
  };
}

var list = makeList();
list.add("peas");
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();