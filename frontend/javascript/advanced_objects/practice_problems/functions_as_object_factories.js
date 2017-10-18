function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      if (visited) {
        return this.name + " is located in " + this.continent + '. I have visited ' + this.name + '.';
      } else {
        return this.name + " is located in " + this.continent + '. I haven\'t visited ' + this.name + '.';        
      }
    },
    visitCountry: function() {
      this.visited = true;
    }
  };
}

var chile = makeCountry("The Republic of Chile", "South America", true);
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

console.log(chile.getDescription());
console.log(canada.getDescription());
console.log(southAfrica.getDescription());