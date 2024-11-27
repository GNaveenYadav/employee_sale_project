from django.urls import path
from . import views  # Import views from the same directory

urlpatterns = [
    path('', views.home, name='home'),  # Define a route for the home view
]
