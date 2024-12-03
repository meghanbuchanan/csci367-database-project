"""
Flask API for searching for a hike

This API provides endpoints to search for a hike by:
- Trail Name: /names/search
- Trail Details: /details/search
"""
from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from config import app_config
import logging

logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Loading the configurations from the config module
app.config.from_object(app_config)

# Database configuration variables
MYSQL_HOST = app.config['MYSQL_HOST']
MYSQL_USER = app.config['MYSQL_USER']
MYSQL_PASSWORD = app.config['MYSQL_PASSWORD']
MYSQL_DB = app.config['MYSQL_DB']

def get_db_connection():
    """
    Get a connection to the database to be able to query trails
    """
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    return conn

def search_trail_by_name(name: str):
    """
    Query the database to find trails with names containing the provided string.
    """
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    select_fields = (
        "id, trail_name, trail_length_miles, trail_elevation_feet, "
        "hiking_time_hours, pets_allowed, camp_sites, national_park, "
        "trail_accessibility, link_of_info"
    )
    query = f"""
        SELECT {select_fields}
        FROM hiking_trails
        WHERE trail_name LIKE %s
    """
    cursor.execute(query, (f"%{name}%",))
    results = cursor.fetchall()

    conn.close()
    return results


def search_trail_by_details(
        parks: str, 
        length_min: int, 
        length_max: int, 
        elevation_min: int, 
        elevation_max: int, 
        time_min: int, 
        time_max: int, 
        pets_allowed: str, 
        camping: str
    ):
    """
    Query the database to find trails with columns containing the provided parameters
    """
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = "SELECT * FROM hiking_trails WHERE 1=1"
    params = []

    if parks:
        query += " AND national_park = %s"
        params.append(parks)
    if length_min is not None and length_max is not None:
        query += " AND trail_length_miles BETWEEN %s AND %s"
        params.append(length_min)
        params.append(length_max)
    if elevation_min is not None and elevation_max is not None:
        query += " AND trail_elevation_feet BETWEEN %s AND %s"
        params.append(elevation_min)
        params.append(elevation_max)
    if time_min is not None and time_max is not None:
        query += " AND hiking_time_hours BETWEEN %s AND %s"
        params.append(time_min)
        params.append(time_max)
    if pets_allowed is not None:
        if pets_allowed == 'true':
            pets_allowed = True
        else:
            pets_allowed = False

        query += " AND pets_allowed = %s"
        params.append(pets_allowed)
    if camping is not None:
        if camping == 'true':
            camping = True
        else:
            camping = False

        if camping:
            query += " AND JSON_LENGTH(camp_sites) > 0"
        else:
            query += " AND JSON_LENGTH(camp_sites) = 0"

    cursor.execute(query, params)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results


@app.route('/names/search', methods=['GET'])
def search_names():
    """
    API endpoint to search hikes by name
    """
    trail_name = request.args.get('name', '')
    results = search_trail_by_name(trail_name)

    return jsonify(results)

@app.route('/details/search', methods=['GET'])
def search_details():
    """
    API endpoint to search hikes by details
    """
    parks = request.args.get('park', type=str)
    length_min = request.args.get('lengthMin', type=int, default=0)
    length_max = request.args.get('lengthMax', type=int, default=45)
    elevation_min = request.args.get('elevationMin', type=int, default=0)
    elevation_max = request.args.get('elevationMax', type=int, default=12000)
    time_min = request.args.get('timeMin', type=int, default=0)
    time_max = request.args.get('timeMax', type=int, default=48)
    pets_allowed = request.args.get("pets", type=str)
    camping = request.args.get("camping", type=str)

    results = search_trail_by_details(
        parks, 
        length_min, 
        length_max, 
        elevation_min, 
        elevation_max, 
        time_min, 
        time_max, 
        pets_allowed, 
        camping
    )

    return jsonify(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
