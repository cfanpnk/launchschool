CREATE TABLE stars (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL UNIQUE,
  distance INTEGER NOT NULL CHECK (distance > 0),
  spectral_type VARCHAR(1),
  companions INTEGER NOT NULL CHECK (companions > 0)
);

CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  designation VARCHAR(1),
  mass INTEGER
);

ALTER TABLE planets ADD COLUMN star_id INTEGER NOT NULL REFERENCES stars(id);

ALTER TABLE stars ALTER COLUMN name TYPE VARCHAR(50);

ALTER TABLE stars ALTER COLUMN distance TYPE NUMERIC;

ALTER TABLE stars 
ADD CONSTRAINT stars_spectral_type_check CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL

CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');
ALTER TABLE stars
ALTER COLUMN spectral_type TYPE spectral_type_enum
                           USING spectral_type::spectral_type_enum;


ALTER TABLE planets 
ALTER COLUMN mass TYPE NUMERIC,
ALTER COLUMN mass SET NOT NULL,
ALTER COLUMN designation SET NOT NULL,
ADD CONSTRAINT planets_mass_check CHECK(mass > 0);