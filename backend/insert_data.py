import mysql.connector
import pandas as pd
from config import DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

df = pd.read_excel('data/trails_data.xlsx') # NO CSV FILE YET

conn = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME
)
cursor = conn.cursor()

for _, row in df.iterrows():
    cursor.execute('''
    INSERT INTO hiking_trails (national_park, trail_name, trail_length, trail_elevation,
                               hiking_time, camp_sites, trail_accessibility, pets_allowed)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    ''', tuple(row))

conn.commit()
conn.close()