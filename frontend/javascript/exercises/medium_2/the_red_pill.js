function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32));
    anotherOne(116, 111, 32);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101, 32);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);


// Welcome
// to
// the
// Matrix!
