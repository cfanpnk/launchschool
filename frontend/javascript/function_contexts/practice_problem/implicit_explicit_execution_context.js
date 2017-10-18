// Question 1:
// function func() {
//   return this;
// }

// var context = func();
// console.log(context); 

// Question 2:
// var o = {
//   a: 2,
//   func: function() {
//     return this;
//   }
// };

// var context = o.func();
// console.log(context); // { func: [Function: func] }

// Question 3:
// var message = 'Hello from the global scope!';
// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage(); // Hello from the global scope!

// var foo = {
//   message: "Hello from the function scope!"
// };

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage(); // Hello from the function scope!

// Question 4:
// var a = 10;
// var b = 10;
// var c = {
//   a: -10,
//   b: -10
// };
// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add()); // 20
// console.log(c.add()); // 0

// Question 6:
// var foo = {
//   a: 1,
//   b: 2
// };

// var bar = {
//    a: "abc",
//    b: "def",
//    add: function() {
//      return this.a + this.b;
//    }
// };

// console.log(bar.add.call(foo));

// Question 7:
var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: "A Collection of Fruit"
}


function outputList() {
  console.log(this.title + ':');

  var args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// fruitsObj.outputList = outputList;
outputList.apply(fruitsObj, fruitsObj.list);