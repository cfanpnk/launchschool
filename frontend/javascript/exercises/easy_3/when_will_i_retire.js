var age = Number(prompt('What is your age?'));
var ageToRetire = Number(prompt('At what age would you like to retire?'));
var years = ageToRetire - age;
var thisYear = new Date().getFullYear();
var yearToRetire = thisYear + years;

console.log("It's " + thisYear + '. You will retire in ' + yearToRetire + '.');
console.log('You have only ' + years + ' years of work to go!');