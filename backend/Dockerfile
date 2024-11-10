# Use the official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set Flask app environment variable
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# Copy the app code
COPY . .

# Expose port for Flask
EXPOSE 5000

# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]
