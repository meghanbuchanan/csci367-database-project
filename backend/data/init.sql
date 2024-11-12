-- Create the 'hiking_trails' table
CREATE TABLE IF NOT EXISTS hiking_trails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    national_park VARCHAR(255),
    trail_name VARCHAR(255),
    trail_length_miles DECIMAL(5, 2),
    trail_elevation_feet INT,
    hiking_time_hours DECIMAL(5, 2),
    camp_sites JSON,
    trail_accessibility TEXT,
    pets_allowed BOOLEAN,
    link_of_info VARCHAR(255),
    CONSTRAINT unique_trail UNIQUE (trail_name, national_park)
);
