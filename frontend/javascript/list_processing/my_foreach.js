function myForEach(array, func) {
  for (var i = 0; i < array.length; i += 1) {
    func(array[i]);
  }
}

var min = Infinity;
var getMin = function(value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);     // undefined
console.log(min);                         // 3