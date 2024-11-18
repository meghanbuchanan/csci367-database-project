from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from config import app_config
import logging

# Set up logging configuration
logging.basicConfig(level=logging.DEBUG)
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
    Get all the trails from the database that include the provided name.
    """
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    query = """
        SELECT id, trail_name, trail_length_miles
        FROM hiking_trails
        WHERE trail_name LIKE %s
    """
    cursor.execute(query, (f"%{name}%",))
    results = cursor.fetchall()
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
    parks = request.args.get('park')
    length_min = request.args.get('lengthMin', type=int, default=0)
    length_max = request.args.get('lengthMax', type=int, default=45)
    elevation_min = request.args.get('elevationMin', type=int, default=0)
    elevation_max = request.args.get('elevationMax', type=int, default=12000)
    time_min = request.args.get('timeMin', type=int, default=0)
    time_max = request.args.get('timeMax', type=int, default=48)
    pets_allowed = request.args.get("pets", type=str)
    camping = request.args.get("camping", type=str)

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

    # Execute the query
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)  # Use dictionary cursor to get results as dict
    logger.debug(query)
    logger.debug(params)
    cursor.execute(query, params)
    hikes = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(hikes)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
