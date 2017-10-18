function makeCar(accelerateRate, breakRate) {
  return {
    speed: 0,
    accelerateRate: accelerateRate,
    breakRate: breakRate,
    accelerate: function() {
      this.speed += this.accelerateRate;
    },
    brake: function() {
      this.speed -= this.breakRate
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

var sedan = makeCar(8, 6);

sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);