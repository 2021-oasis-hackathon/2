from django.db import models


# Create your models here.

class CovidData(models.Model):

    location = models.CharField(max_length=128, null=False)
    update_date = models.CharField(max_length=128, null=False)
    confirmed_patient = models.IntegerField( null=False)
    confirmed_increase = models.IntegerField(null=False)
    quarantine = models.IntegerField(null=False)
    dead = models.IntegerField(null=False)

    class Meta:
        db_table = "CovidData"