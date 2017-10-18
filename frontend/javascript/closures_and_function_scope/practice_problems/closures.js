// Question 1:
// function makeMultipleLister(number) {
//   return function() {
//     for (var i = number; i < 100; i += number) {
//       console.log(i);
//     }
//   };
// }

// var lister = makeMultipleLister(13);
// lister();

// Question 2:
// var total = 0;

// function add(number) {
//   total += number;
//   console.log(total);
// }

// function subtract(number) {
//   total -= number;
//   console.log(total);
// }

// add(1);
// add(42);
// subtract(39);
// add(6);


// Question 3:
// function later(func, args) {
//   return function() {
//     func(args);
//   };
// }

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();

// Question 4:
// function startup() {
//   var status = 'ready';
//   return function() {
//     console.log('The system is ready.');
//   }
// }

// var ready = startup();
// var systemStatus = // ?