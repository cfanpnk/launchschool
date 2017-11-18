var obj = {
  name: 'Obj'
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false
  }
});

console.log(obj.age); // 30
obj.age = 32;
console.log(obj.age); // 30

function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false
    }
  });
}