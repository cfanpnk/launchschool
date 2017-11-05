var inventory;

(function() {
  inventory = {
    lastId: 0,
    template: '',
    collection: [],
    setDate: function() {
      var orderDate = new Date();
      $('#order_date').text(orderDate.toUTCString());
    },
    setTemplate: function() {
      var template = $('#inventory_item').text();
      this.template = Handlebars.compile($('#inventory_item').html());
    },
    addNewItem: function(e) {
      e.preventDefault();      
      this.lastId++;
      var item = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1,
      }
      var itemRow = this.template({id: item.id});
      inventory.collection.push(item);
      $('#inventory').append(itemRow);
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = $(e.target).closest('tr').remove();
      var itemId = Number($item.find('input[type=hidden]').val());
      this.collection = this.collection.filter(function(item) {
        return item.id !== itemId;
      });
    },
    updateItem: function(e) {
      var $item = $(e.target).closest('tr');
      var itemId = Number($item.find('input[type=hidden]').val());
      var itemName = $item.find('input[name^=item_name]').val();
      var itemStockNumber = Number($item.find('input[name^=item_stock_number]').val());
      var itemQuantity = Number($item.find('input[name^=item_quantity]').val());
      
      this.collection.forEach(function(item) {
        if (item.id === itemId) {
          item.name = itemName;
          item.stockNumber = itemStockNumber;
          item.quantity = itemQuantity;
          return false;
        }
      });
    },
    bindEvents: function() {
      $('#add_item').on('click', this.addNewItem.bind(this));
      $('#inventory').on('click', 'a.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.setTemplate();
      this.bindEvents();
    }
  };

})();

$(inventory.init.bind(inventory));
