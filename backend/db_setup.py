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
    trail_length DECIMAL(5,2),
    trail_elevation INT,
    hiking_time DECIMAL(5,2),
    camp_sites JSON,
    trail_accessibility VARCHAR(255),
    pets_allowed BOOLEAN
);
''')

conn.close()
