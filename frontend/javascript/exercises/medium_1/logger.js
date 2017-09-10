function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();