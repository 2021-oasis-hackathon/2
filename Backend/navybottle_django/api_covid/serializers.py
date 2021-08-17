from .models import CovidData
from rest_framework import serializers

class CovidDataserializers(serializers.ModelSerializer):
    class Meta:
        model = CovidData
        fields = '__all__'