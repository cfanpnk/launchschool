var invoices = {
  unpaid: [],
  paid: [],
  add: function (clientName, amountOwe) {
    var client = {};
    client.name = clientName;
    client.amount = amountOwe;
    this.unpaid.push(client);
  },
  totalDue: function () {
    return this.unpaid.reduce(function (total, client) {
      return total + client.amount;
    }, 0);
  },
  totalPaid: function () {
    return this.paid.reduce(function (total, client) {
      return total + client.amount;
    }, 0);
  },
  payInvoice: function (clientName) {
    var unpaidInvoices = [];
    var self = this;
    this.unpaid.forEach(function (invoice) {
      if (invoice.name === clientName) {
        self.paid.push(invoice);
      } else {
        unpaidInvoices.push(invoice);
      }
    });
    this.unpaid = unpaidInvoices;
  },
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
