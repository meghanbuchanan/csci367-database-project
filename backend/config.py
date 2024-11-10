import os

class Config:
    DB_HOST = os.getenv("DB_HOST", "db")  # Change localhost to db
    DB_USER = os.getenv("DB_USER", "user")  # Use 'user' as defined in docker-compose
    DB_PASSWORD = os.getenv("DB_PASSWORD", "password")  # Use 'password' as defined in docker-compose
    DB_NAME = os.getenv("DB_NAME", "hiking_trails")  # Use 'hiking_trails' as defined in docker-compose
    
    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
