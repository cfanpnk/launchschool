function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(makeLogger(i), i * 1000);
  }
}
delayLog();


// Question 2:
setTimeout(function() {   // 1
  console.log("Once");    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log("upon");    // 5
}, 3000);

setTimeout(function() {   // 3
  console.log("a");       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log("time");    // 8
}, 4000);


// Question 3:
setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);  //25

  d(); // 10

  setTimeout(function() {
    n();
  }, 5); //15

  z(); // 10
}, 10);

setTimeout(function() {
  s();
}, 20); //20

setTimeout(function() {
  f();
});

g();

// g() => f() => d() => z() => n() => s() => q()

// Question 4:
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}