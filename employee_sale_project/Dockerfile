FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy your requirements file into the container
COPY requirements.txt /app/

# Install dependencies
RUN pip install -r requirements.txt

# Copy your Django project code into the container
COPY . /app/

# Collect static files (optional)
RUN python manage.py collectstatic --noinput

# Expose the port the app runs on
EXPOSE 8000

# Run the server (replace with gunicorn when in production)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
