// Question 1:
// var turk = {
//   first_name: "Christopher",
//   last_name: "Turk",
//   occupation: "Surgeon",
//   getDescription: function() {
//     return this.first_name + ' ' + this.last_name + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   var returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription); // undefined undefined is a undefined.

// Question 2:
// var turk = {
//   first_name: "Christopher",
//   last_name: "Turk",
//   occupation: "Surgeon",
//   getDescription: function() {
//     return this.first_name + ' ' + this.last_name + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   var returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// Question 3:
// var turk = {
//   first_name: "Christopher",
//   last_name: "Turk",
//   occupation: "Surgeon",
//   getDescription: function() {
//     return this.first_name + ' ' + this.last_name + ' is a ' + this.occupation + '.';
//   }
// };

// var getTurnDescription = turk.getDescription.bind(turk);
// console.log(getTurnDescription());


// Question 5:
// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function() {
//     var self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// }

// TESgames.listGames();

// Question 6:
// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// }

// TESgames.listGames();


// Question 7:
// var foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// }

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a); // 0


// Question 8:
// var foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// }

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a); // 0

// Question 9:
var foo = {
  a: 0,
  incrementA: function() {
    var increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
}

foo.incrementA();
console.log(foo.a); // 0