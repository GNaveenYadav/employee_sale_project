from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.shortcuts import render


 # Correct usage of TemplateView

def home(request):
     return render(request, 'employees/home.html')  # Ensure the template exists at the specified path
