CREATE TABLE birds (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  age INTEGER,
  species VARCHAR(15)
);

INSERT INTO birds(name, age, species) VALUES ('Charlie', 3, 'Finch');
INSERT INTO birds(name, age, species) VALUES ('Allie', 5, 'Owl');
INSERT INTO birds(name, age, species) VALUES ('Jennifer', 3, 'Magpie');
INSERT INTO birds(name, age, species) VALUES ('Jamie', 4, 'Owl');
INSERT INTO birds(name, age, species) VALUES ('Roy', 8, 'Crow');