from django.db import models


class Site(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=10, decimal_places=5)
    lon = models.DecimalField(max_digits=10, decimal_places=5)
    locphone = models.CharField(max_length=200)
    manager = models.CharField(max_length=200)
    mgrphone1 = models.CharField(max_length=200)
    mgremail = models.CharField(max_length=200)
    principal = models.CharField(max_length=200)
    prncphone = models.CharField(max_length=200)
    prncemail = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Program(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    schedule = models.CharField(max_length=200)
