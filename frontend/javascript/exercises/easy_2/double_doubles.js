function isDoubleNumber(number) {
  var numberStr = number.toString();
  var length = numberStr.length;  
  var left;
  var right;
  if (length % 2 !== 0) {
    return false;
  }
  left = numberStr.substr(0, length / 2);
  right = numberStr.substr(length / 2, length / 2);
  return left === right;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}


console.log(twice(37));                 // 74
console.log(twice(44));                 // 44
console.log(twice(334433));             // 668866
console.log(twice(444));                // 888
console.log(twice(107));                // 214
console.log(twice(103103));             // 103103
console.log(twice(3333));               // 3333
console.log(twice(7676));               // 7676