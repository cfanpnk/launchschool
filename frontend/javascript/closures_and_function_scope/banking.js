function makeBank() {
  var accountNumber = 101;
  var accounts = [];

  function makeAccount(accountNumber) {
    var number = accountNumber;
    var balance = 0;
    var transactions = [];
    return {
      deposit: function (amount) {
        var transaction = {};
        balance += amount;
        transaction.type = 'deposit';
        transaction.amount = amount;
        transactions.push(transaction);
        return amount;
      },
      withdraw: function (amount) {
        var transaction = {};
        if (amount > balance) {
          amount = balance;
        }
        balance -= amount;
        transaction.type = 'withdraw';
        transaction.amount = amount;
        transactions.push(transaction);
        return amount;
      },
      getBalance: function () {
        return balance;
      },
      getAccountNumber: function () {
        return number;
      },
      getTransactions: function () {
        return transactions;
      }
    };
  }

  return {
      openAccount: function () {
        var account = makeAccount(accountNumber);
        accountNumber++;
        accounts.push(account);
        return account;
      },
      transfer: function (source, destination, amount) {
        return destination.deposit(source.withdraw(amount));
      }
  }
}

var bank = makeBank();
var account = bank.openAccount();
console.log(account.getBalance());
account.deposit(17);
var secondAccount = bank.openAccount();
console.log(secondAccount.getAccountNumber());
console.log(account.getTransactions());
