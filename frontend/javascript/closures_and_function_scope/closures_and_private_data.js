// Question 1:
// function makeCounterLogger(number) {
//   return function(newNumber) {
//     if (number < newNumber) {
//       for (var i = number; i <= newNumber; i++) {
//         console.log(i);
//       }
//     } else {
//       for (var j = number; j >= newNumber; j--) {
//         console.log(j);
//       }
//     }
//   };
// }

// var countlog = makeCounterLogger(5);

// countlog(8);
// countlog(2);

// Question 2:
function makeList() {
  var list = [];
  return function(item) {
    var index = list.indexOf(item);
    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(function (item) {
          console.log(item);
        });
      }
    } else if (index >= 0) {
      list.splice(index, 1);
      console.log(item + ' removed!')
    } else {
      list.push(item);
      console.log(item + ' added!');
    }
  };
}

var list = makeList();
list();
list("make breakfast");
list("read book");
list();
list('make breakfast');
list();