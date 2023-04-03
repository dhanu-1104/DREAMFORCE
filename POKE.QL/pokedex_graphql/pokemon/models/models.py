from django.db import models


class pokemon(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False, default="normal")
    type = models.CharField(max_length=50, null=False, blank=False, default="normal")
    strength = models.CharField(max_length=250, null=False, blank=False)
    file_name = models.CharField(max_length=255, null=False, blank=False, default="normal")
    file_path = models.CharField(max_length=255, null=False, blank=False, default="normal")

def __str__(self):
    return self.name


__all__ = [
    "pokemon"
]
