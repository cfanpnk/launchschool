CREATE TABLE bidders (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  initial_price numeric(6, 2) NOT NULL,
  sales_price numeric
);

CREATE TABLE bids (
  id SERIAL PRIMARY KEY,
  bidder_id INTEGER NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
  item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  amount numeric(6, 2) NOT NULL
);

CREATE INDEX bids_bidder_item_index ON bids(bidder_id, item_id);

