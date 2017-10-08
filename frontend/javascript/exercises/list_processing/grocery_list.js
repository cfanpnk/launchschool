function buyFruit(fruits) {
  result = [];
  fruits.forEach(function (fruit) {
    var quantity = fruit[1];
    for (var i = 0; i < quantity; i++) {
      result.push(fruit[0]);
    }
  });
  return result;
}

console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));