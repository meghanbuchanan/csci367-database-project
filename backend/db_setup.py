import mysql.connector
from config import DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

conn = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME
)
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS hiking_trails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    national_park VARCHAR(255),
    trail_name VARCHAR(255),
    trail_length_miles DECIMAL(5,2),
    trail_elevation_feet INT,
    hiking_time_hours DECIMAL(5,2),
    camp_sites JSON,
    trail_accessibility TEXT,
    pets_allowed BOOLEAN,
    link_of_info VARCHAR(255)
);
''')

conn.close()
