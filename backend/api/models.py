from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    content = models.TextField()
    image = models.ImageField(upload_to='uploads/', null=True, blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_on = models.DateTimeField(auto_now=True)
    updated_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.creator.username