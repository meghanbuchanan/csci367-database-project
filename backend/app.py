from flask import Flask, jsonify
import mysql.connector
from config import app_config

app = Flask(__name__)

# Load the configuration directly
app.config.from_object(app_config)

# Example of using the config values
MYSQL_HOST = app.config['MYSQL_HOST']
MYSQL_USER = app.config['MYSQL_USER']
MYSQL_PASSWORD = app.config['MYSQL_PASSWORD']
MYSQL_DB = app.config['MYSQL_DB']

def get_db_connection():
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    return conn

# These are examples of API requests

# @app.route('/api/getTrails', methods=['GET'])
# def get_trails():
#     conn = get_db_connection()
#     cursor = conn.cursor(dictionary=True)
#     cursor.execute('SELECT * FROM trails')  # Assuming you have a `trails` table
#     trails = cursor.fetchall()
#     cursor.close()
#     conn.close()
#     return jsonify(trails)

# @app.route('/api/searchTrails', methods=['GET'])
# def search_trails():
#     query = request.args.get('query', '')
#     conn = get_db_connection()
#     cursor = conn.cursor(dictionary=True)
#     cursor.execute(f"SELECT * FROM trails WHERE name LIKE %s", ('%' + query + '%',))
#     trails = cursor.fetchall()
#     cursor.close()
#     conn.close()
#     return jsonify(trails)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
