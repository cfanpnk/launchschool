CREATE TABLE expenses (
  id         SERIAL PRIMARY KEY,
  amount     NUMERIC NOT NULL CHECK(amount > 0),
  memo       VARCHAR(1000) NOT NULL,
  created_on DATE NOT NULL
);