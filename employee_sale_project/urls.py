from django.contrib import admin
from django.urls import path, include  # Import 'include' to include app URLs

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin route
    path('', include('employees.urls')),  # Include employees app routes
]
