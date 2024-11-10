import mysql.connector
import pandas as pd
from config import Config

df = pd.read_excel('/app/data/hiking_data.xlsx')

try:
    conn = mysql.connector.connect(
        host=Config.DB_HOST,
        user=Config.DB_USER,
        password=Config.DB_PASSWORD,
        database=Config.DB_NAME
    )
    cursor = conn.cursor()

    for _, row in df.iterrows():
        # Use ON DUPLICATE KEY UPDATE to update specific fields on duplicate entries
        cursor.execute('''
        INSERT INTO hiking_trails (national_park, trail_name, trail_length_miles, trail_elevation_feet,
                                    hiking_time_hours, camp_sites, trail_accessibility, pets_allowed, link_of_info)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON DUPLICATE KEY UPDATE
            trail_length_miles = VALUES(trail_length_miles),
            trail_elevation_feet = VALUES(trail_elevation_feet),
            hiking_time_hours = VALUES(hiking_time_hours),
            camp_sites = VALUES(camp_sites),
            trail_accessibility = VALUES(trail_accessibility),
            pets_allowed = VALUES(pets_allowed),
            link_of_info = VALUES(link_of_info)
        ''', tuple(row))

    conn.commit()

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    if conn.is_connected():
        cursor.close()
        conn.close()
