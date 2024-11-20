from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'profession', 'salary')
    search_fields = ('name', 'profession')
    list_filter = ('profession',)
