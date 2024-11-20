# employee_sale_project/urls.py

from employees import views  # Import the views module from employees app
from django.urls import path

urlpatterns = [
    # Add your URL patterns here
    path('', views.home, name='home'),  # Example URL pattern using views from the employees app
]
