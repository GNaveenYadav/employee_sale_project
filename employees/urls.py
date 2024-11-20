from django.contrib import admin
from django.urls import path
from employees import views  # Correct import from employees app
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    path('', views.home, name='home'),  # Now calling the correct view
]
