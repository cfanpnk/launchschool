// Question 1:
// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// console.log(sub5(10));

// Question 2:
// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function(a) {
//     return subtract(a, n);
//   }
// }

// var sub5 = makeSubN(5);
// console.log(sub5(10)); // 5

// Question 3:
// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// var multiplyBy5 = makePartialFunc(function(a, b) {
//   return a * b;
// }, 5);

// console.log(multiplyBy5(100)); // 500

// Question 5:
var subjects = {
  "English": ["Bob", "Tyrone", "Lizzy"],
  "Math": ["Fatima", "Gary", "Susan"],
  "Biology": ["Jack", "Sarah", "Tanya"]
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  };
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects["Math"]);
// Math:
// Fatima
// Gary
// Susan