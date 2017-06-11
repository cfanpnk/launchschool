# Get Customers With Services
SELECT DISTINCT cust.*
FROM   customers cust
       JOIN customers_services cs ON cust.id = cs.customer_id;


# Get Customers With No Services
SELECT *
FROM   services serv
       LEFT OUTER JOIN customers_services cs ON serv.id = cs.service_id
WHERE  cs.service_id IS NULL;

SELECT cust.*, serv.*
FROM   customers cust
       LEFT JOIN  customers_services cs ON cust.id = cs.customer_id
       FULL JOIN  services serv ON serv.id = cs.service_id
WHERE  cs.customer_id IS NULL
AND    cs.service_id IS NULL;


# Get Services With No Customers
SELECT description
FROM   customers_services cs
       RIGHT JOIN services serv ON serv.id = cs.service_id
WHERE  cs.service_id IS NULL;

# Services for each Customer
SELECT   cust.name, 
         string_agg(serv.description, ', ')
FROM     customers cust
         LEFT JOIN customers_services cs ON cust.id = cs.customer_id
         LEFT JOIN services serv ON serv.id = cs.service_id
GROUP BY cust.name;

# Services With At Least 3 Customers
SELECT   description,
         count(1)
FROM     services serv
         JOIN customers_services cs ON serv.id = cs.service_id
GROUP BY description
HAVING   count(1) >= 3;

# Total Gross Income
SELECT   description, sum(price) as gross, count(1)
FROM     services serv
         JOIN customers_services cs ON serv.id = cs.service_id
GROUP BY description;