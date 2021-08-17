from django.db import models


# Create your models here.

class CovidData(models.Model):

    location = models.CharField(max_length=128, null=False)
    update_date = models.CharField(max_length=128, null=False)
    confirmed_patient = models.CharField(max_length=128, null=False)
    confirmed_increase = models.CharField(max_length=128, null=False)
    quarantine = models.CharField(max_length=128, null=False)
    dead = models.CharField(max_length=128, null=False)

    class Meta:
        db_table = "CovidData"