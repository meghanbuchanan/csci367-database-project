import os

class Config:
    """Configuration for the app."""
    MYSQL_HOST = os.getenv('MYSQL_HOST', 'mysql')  # 'mysql' refers to the MySQL service in docker-compose
    MYSQL_USER = os.getenv('MYSQL_USER', 'root')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', 'password')
    MYSQL_DB = os.getenv('MYSQL_DB', 'hiking_trails')

# Using the Config class directly without needing environment-specific subclasses.
app_config = Config

