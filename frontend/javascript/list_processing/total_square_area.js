// 1. transform the rectangles array into another array with area value
// 2. Get the total of all the area values using reduction
function totalArea(rectangles) {
  var areas = rectangles.map(function(rec) {
    return rec[0] * rec[1];
  });
  var total = areas.reduce(function(sum, each) {
    return sum + each;
  })
  return total;
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rec) {
    return rec[0] === rec[1];
  });
  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles)); // 121