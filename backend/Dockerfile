# Use a Python base image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the backend files to the container's working directory
COPY ./config.py /app/
COPY ./insert_data.py /app/
COPY ./data /app/data
COPY ./requirements.txt /app/
COPY ./app.py /app/

# Install the Python dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt

# Set environment variables (for Flask and MySQL connection)
ENV FLASK_APP=app.py
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=password
ENV MYSQL_DB=hiking_db

# Run the data insertion script before starting the Flask app
CMD bash -c "python /app/insert_data.py && flask run --host=0.0.0.0"
