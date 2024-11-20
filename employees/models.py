# employees/models.py

from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=255)
    profession = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    photo = models.ImageField(upload_to='employees_photos/')

    def __str__(self):
        return self.name
