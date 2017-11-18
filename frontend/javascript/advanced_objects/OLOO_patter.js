var Point = {                       // capitalized name for the prototype as a convention
  x: 0,                             // default value defined on the prototype
  y: 0,

  onXAxis: function() {            // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin:  function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {          // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  }
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point);

console.log(Point.isPrototypeOf(pointA));        // use isPrototypeOf to check type
console.log(Point.isPrototypeOf(pointB));

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true