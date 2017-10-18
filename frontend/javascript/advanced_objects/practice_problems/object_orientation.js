function createProduct(id, name, stock, price) {
  var newProduct = {};
  newProduct.id = id;
  newProduct.name = name;
  newProduct.stock = stock;
  newProduct.price = price;
  newProduct.setProductPrice = function(price) {
    if (price < 0) {
      console.log('Invalid price!');
    } else {
      this.price = price;
    }
  };
  newProduct.describeProduct = function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: ' + '$' + this.price);
    console.log('Stock: ' + this.stock);
  };
  return newProduct;
}

var scissor = createProduct(0, 'Scissors', 8, 10);
scissor.setProductPrice(-5);
var drill = createProduct(1, 'Cordless Drill', 15, 45);
scissor.describeProduct();
var saw = createProduct(2, 'Circular Saw', 12, 95);
var hammer = createProduct(3, 'Sledge Hammer', 78, 45);
var boxCutter = createProduct(4, 'Box Cutter', 41, 15);