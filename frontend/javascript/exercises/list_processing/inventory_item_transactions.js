function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function (transaction) {
    return transaction.id === inventoryItem;
  });
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

console.log(transactionsFor(101, transactions));