// Question 2:
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();

// Question 3:
// var sum = 0;

// sum += 10;
// sum += 31;

// var numbers = [1, 7, -3, 3];

// sum += (function (arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

// Question 4:
// function countdown(count) {
//   (function countdown(number) {
//     for (var i = number; i >= 0; i--) {
//       console.log(i);
//     }
//     console.log('Done!');
//   })(count);
// }

// countdown(7);


// Question 5:
// function countdown(count) {
//   (function countdown(number) {
//     console.log(number);
//     if (number === 0) {
//       console.log('Done!');
//       return 0;
//     }
//     countdown(number - 1);
//   })(count);
// }

// countdown(7);
