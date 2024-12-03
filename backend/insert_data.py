import mysql.connector
import pandas as pd
import time
from config import Config

def wait_for_mysql():
    """
    Waits for the MySQL database to be ready before proceeding.

    Continuously attempts to connect to the MySQL database specified in the 
    configuration. If the connection fails, the function retries after a 
    5-second delay. Once the database is ready, it prints a confirmation message.
    """

    while True:
        try:
            # Attempt to establish a connection
            conn = mysql.connector.connect(
                host=Config.MYSQL_HOST,
                user=Config.MYSQL_USER,
                password=Config.MYSQL_PASSWORD,
                database=Config.MYSQL_DB
            )
            conn.close()
            print("MySQL is ready!")
            break
        except mysql.connector.Error as err:
            print(f"MySQL not ready: {err}")
            time.sleep(5)

df = pd.read_excel('/app/data/hiking_data.xlsx')

# Wait until MySQL is ready before inserting data
wait_for_mysql()

try:
    conn = mysql.connector.connect(
        host=Config.MYSQL_HOST,
        user=Config.MYSQL_USER,
        password=Config.MYSQL_PASSWORD,
        database=Config.MYSQL_DB
    )
    cursor = conn.cursor()

    # Insert data into the hiking_trails table
    for _, row in df.iterrows():
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
