function invoiceTotal() {
  var total = 0
  for (var i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }
  return total;
}

console.log(invoiceTotal(20, 30, 40, 50));             // works
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));     // doesn't work; how can you make it work?