-- Conditional Subqueries: IN
SELECT name AS 'Bid on Items'
FROM   items
WHERE  id IN
  ( SELECT item_id
    FROM   bids 
  );

-- Conditional Subqueries: NOT IN
SELECT name AS 'Not Bid On'
FROM   items
WHERE  id NOT IN
  ( SELECT item_id
    FROM   bids 
  );

-- Conditional Subqueries: EXISTS
SELECT name
FROM   bidders
WHERE  EXISTS
  ( SELECT 1
    FROM   bids
    WHERE  bidder_id = bidders.id
  );

SELECT DISTINCT bidders.name
FROM   bidders JOIN bids ON bidders.id = bids.bidder_id;

-- Conditional Subqueries: ANY, SOME, ALL
SELECT name
FROM   items
WHERE  100 > ANY
  ( SELECT amount
    FROM   bids
    WHERE  bids.item_id = items.id
  );

SELECT name
FROM   items
WHERE  100 > ALL
  ( SELECT amount
    FROM   bids
    WHERE  bids.item_id = items.id
  );

SELECT DISTINCT name
FROM   items JOIN bids ON items.id = bids.item_id
WHERE  amount < 100;
