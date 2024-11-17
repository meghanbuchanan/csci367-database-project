from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from config import app_config

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

@app.route('/search', methods=['GET'])
def search_hikes():
    """
    API endpoint to search hikes by name
    """
    trail_name = request.args.get('name', '')
    results = search_trail_by_name(trail_name)
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
