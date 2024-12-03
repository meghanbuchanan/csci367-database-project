FROM python:3.11-slim

WORKDIR /app

COPY ./config.py /app/
COPY ./insert_data.py /app/
COPY ./data /app/data
COPY ./requirements.txt /app/
COPY ./app.py /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

ENV FLASK_APP=app.py
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=password
ENV MYSQL_DB=hiking_db

CMD bash -c "python /app/insert_data.py && flask run --host=0.0.0.0"
