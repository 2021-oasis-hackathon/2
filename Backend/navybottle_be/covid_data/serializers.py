from rest_framework import serializers
from .models import CovidData, User
 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CovidData
        fields = '__all__'