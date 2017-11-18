function Vehicle() {
  this.doors = 4;
  this.wheels = 4;
}

function Sedan() {}

Sedan.prototype = Object.create(Vehicle.prototype);

var sedan = new Sedan();
console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);