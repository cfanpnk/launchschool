var me = {

  firstName: 'Jane',
  lastName: 'Doe'
};

var friend = {
  firstName: 'John',
  lastName: 'Smith'
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe'
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe'
}

var people = {
  collection: [me, friend, mother, father],
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    return this.collection[this.getIndex(person)];
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    this.collection.push(person);
  },
  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    var index = this.getIndex(person);
    if (index === -1) {
      return;
    }
    
    this.collection.splice(index, 1);
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function (comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  }
};

// console.log(people.getIndex(friend)); // 1
// people.remove(friend);
// console.log(people.getIndex(friend)); // -1

people.add({firstName: 'Nankai', lastName: 'Pan'})
console.log(people.get({firstName: 'Nankai', lastName: 'Pan'}).index);
// fullName(me);
// fullName(friend);
// fullName(mother);
// fullName(father);

