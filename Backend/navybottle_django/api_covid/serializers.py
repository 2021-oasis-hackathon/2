from .models import CovidData
from rest_framework import serializers

class CovidDataserializers(serializers.ModelSerializer):
    class Meta:
        model = CovidData
        fields = '__all__'
        # 모델 User의 모든 field를 serializer함.