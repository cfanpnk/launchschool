var row;
var i;
var j;

function padLeft(num) {
  return String(num).length <= 1 ? ' ' + num : num;
}

for (i = 1; i <= 10; i++) {
  row = '';
  for (j = 1; j <= 10; j++) {
    row += padLeft(i * j) + ' ';
  }
  console.log(row + '\n');
}