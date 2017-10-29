// Question 1:
var id;
function makeLogger() {
  var i = 1;
  return function() {
    console.log(i);
    i++;  
  }
}

function startCounting() {
  id = setInterval(makeLogger(), 1000);
}

startCounting();

// Question 2:
function stopCounting(id) {
  clearInterval(id);
}
