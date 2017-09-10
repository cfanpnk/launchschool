var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
console.log(array1);