from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.urls import reverse
from django.core.mail import send_mail  

# Create your models here.

class User(AbstractUser):
    ADMIN = 'admin'
    CLIENT = 'client'
    HOST = 'host'
    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (CLIENT, 'Client'),
        (HOST, 'Host'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email=models.CharField(max_length=255,unique=True)
    password=models.CharField(max_length=255)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=CLIENT)
    api_key=models.CharField(max_length=255,blank=True,null=True)
    username=None
    is_active = models.BooleanField(default=True)
    is_staff=None
    is_superuser=None
    last_login=None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [first_name,last_name]