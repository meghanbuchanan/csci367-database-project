# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Use DATABASE_URL directly
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'mysql+pymysql://user:password@db/hiking_trails')
db = SQLAlchemy(app)

# Define a Hike model (adjust to match your database schema)
class Hike(db.Model):
    __tablename__ = 'hiking_trails'  # Match the table name in your schema
    id = db.Column(db.Integer, primary_key=True)
    national_park = db.Column(db.String(255))
    trail_name = db.Column(db.String(255))
    trail_length_miles = db.Column(db.Numeric(5, 2))
    trail_elevation_feet = db.Column(db.Integer)
    hiking_time_hours = db.Column(db.Numeric(5, 2))
    camp_sites = db.Column(db.JSON)  # Assuming JSON data type for camp_sites
    trail_accessibility = db.Column(db.Text)
    pets_allowed = db.Column(db.Boolean)
    link_of_info = db.Column(db.String(255))

    # Add a method to return model data as a dictionary for jsonify
    def as_dict(self):
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}
