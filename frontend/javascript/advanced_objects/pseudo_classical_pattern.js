var Point = function(x, y) {            // capitalized constructor name as a convention
  this.x = x || 0;                      // initialize states with arguments
  this.y = y || 0;                      // 0 as default value
};

Point.prototype.onXAxis = function() {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
}

Point.prototype.onYAxis = function() {  // these methods are added one by one
  return this.x === 0;
}

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

var pointA = new Point(30, 40);     // use new to create objects
var pointB = new Point(20);

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true