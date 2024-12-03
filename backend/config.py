import os

class Config:
    """
    Configuration for the Flask API. This class defines the settings 
    that are needed to connect to the MySQL.
    """
    MYSQL_HOST = os.getenv('MYSQL_HOST', 'mysql')
    MYSQL_USER = os.getenv('MYSQL_USER', 'root')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', 'password')
    MYSQL_DB = os.getenv('MYSQL_DB', 'hiking_trails')

app_config = Config

