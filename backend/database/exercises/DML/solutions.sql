# INNER JOIN
SELECT name,
       part_number
FROM   devices JOIN parts ON devices.id = parts.device_id;


# SELECT part_number
SELECT * FROM parts WHERE CAST(part_number AS text) like '3%';

# ORDER BY
SELECT name,
       COUNT(part_number)
FROM   devices JOIN parts ON devices.id = parts.device_id
GROUP BY name
ORDER BY name ASC;

# IS NULL and IS NOT NULL
SELECT part_number,
       device_id
FROM   devices
WHERE  device_id IS NOT NULL;

SELECT part_number,
       device_id
FROM   devices
WHERE  device_id IS NULL;


# Oldest Device
SELECT   name
FROM     devices
ORDER BY created_at ASC
LIMIT 1;

# Delete Accelerometer
ALTER TABLE parts 
  DROP CONSTRAINT parts_device_id_fkey,
  ADD CONSTRAINT parts_device_id_fkey 
    FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE;

DELETE FROM devices WHERE id = 1;