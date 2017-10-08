function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function (transaction) {
    return transaction.id === inventoryItem;
  });
}

function isItemAvailable(inventoryItem, transactions) {
  var itemTransactions = transactionsFor(inventoryItem, transactions);
  var quantity = 0;
  itemTransactions.forEach(function (transaction) {
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else if (transaction.movement === 'out') {
      quantity -= transaction.quantity;
    }
  })
  return quantity > 0;
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
{id: 105, movement: 'in', quantity: 10, },
{id: 102, movement: 'out', quantity: 17, },
{id: 101, movement: 'in', quantity: 12, },
{id: 103, movement: 'out', quantity: 15, },
{id: 102, movement: 'out', quantity: 15, },
{id: 105, movement: 'in', quantity: 25, },
{id: 101, movement: 'out', quantity: 18, },
{id: 102, movement: 'in', quantity: 22, },
{id: 103, movement: 'out', quantity: 15, },];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
