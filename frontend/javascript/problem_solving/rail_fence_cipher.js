function mark(rails, rows, cols, message) {
  var railNumberArray = findRailNumber(message, rows);
  for (var i = 0; i < cols; i++) {
    rails[railNumberArray[i]][i] = message[i];
  }
}

function findRailNumber(message, numberOfRails) {
  var min = 0;
  var max = numberOfRails - 1;
  var railNumber = 0;
  var railNumberArray = [];
  var increasing = true;
  for (var i = 0; i < message.length; i++) {
    railNumberArray.push(railNumber);               

    if (railNumber === min) {               
      increasing = true;      
    } else if (railNumber === max) {
      increasing = false;         
    } 

    if (increasing) {
      railNumber++;
    } else if (!increasing) {      
      railNumber--;
    }
  }
  return railNumberArray
}

function read(rails, rows, cols) {
  var x;
  var y;
  var encryptedMsg = [];
  for (x = 0; x < rows; x++) {
    for (y = 0; y < cols; y++) {
      if (rails[x][y] != '.') {
        encryptedMsg.push(rails[x][y]);
      }
    }
  }
  return encryptedMsg.join('');
}

function encode(message, numberOfRails) {
  var rail = [];
  var rails = [];
  var rows = numberOfRails;
  var cols = message.length;
  var x = 0;
  var y = 0;
  for (x = 0; x < rows; x++) {
    rail = [];
    for (y = 0; y < cols; y++) {
      rail.push('.');
    }
    rails.push(rail);
  }
  var railNumberArray = findRailNumber(message, numberOfRails);

  mark(rails, numberOfRails, message.length, message);
  return read(rails, rows, cols);
}


console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");  // "WECRLTEERDSOEEFEAOCAIVDEN"
// console.log()
