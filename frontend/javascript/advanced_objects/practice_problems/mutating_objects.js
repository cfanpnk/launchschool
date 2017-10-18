// Question 1:

// var message = "Hello from the global scope!";

// function func(message) {
//   message = "Hello from the function scope!";
//   console.log(message);
// }

// func();
// console.log(message);

// Hello from the function scope!
// Hello from the global scope!


// Question 2:

// var myObj = { message: "Greetings from the global scope!" };

// function func(obj) {
//   obj.message = "Greetings from the function scope!";
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);

// Greetings from the function scope!
// Greetings from the function scope!

// Question 3:
// var message = "Hello from the global scope!";

// function func() {
//   message = "Hello from the function scope!";
//   console.log(message);
// }


// func();
// console.log(message);

// Hello from the function scope!
// Hello from the function scope!

// Question 4:
// var a = 10;
// var obj = {
//   a: a
// }

// var newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a);
// console.log(newObj === obj);

// false
// true

// Question 5:
var animal = {
  name: "Pumbaa",
  species: "Phacochoerus africanus"
};

var menagerie = {
  warthog: animal
};

animal = {
  name: "Timom",
  species: "Suricata suricatta"
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true