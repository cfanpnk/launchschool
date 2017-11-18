// Question 2:
function makeObj() {
  return {
    propA: 10,
    propB: 20
  };
}

// Question 3:
function createInvoice(services) {
  services = services || {};
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return this.phone + this.internet;
    },
    paidAmount: 0,
    amountDue: function() {
      return this.total() - this.paidAmount;
    },
    addPayment: function(payment) {
      payment.phone = payment.phone || 0;
      payment.internet = payment.internet || 0;
      payment.amount = payment.amount || 0;
      this.paidAmount += payment.amount + payment.internet + payment.phone;
    },
    addPayments: function(payments) {
      var self = this;
      payments.forEach(function(payment) {
        self.addPayment(payment);
      });
    }
  };
  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }
  return total;
}

function createPayment(services) {
  services = services || {}
  var payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount
  };
  return payment;
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }
  return total;
}


var invoice = createInvoice({
  phone: 1200,
  internet: 4000
});


var payment1 = createPayment({
  amount: 2000
});
// console.log(payment1);

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});
// console.log(payment2);

var payment3 = createPayment({
  phone: 1000
});
// console.log(payment3);

invoice.addPayment(payment1)

// console.log(invoice);
invoice.addPayments([payment2, payment3]);

console.log(invoice.amountDue());       // this should return 0