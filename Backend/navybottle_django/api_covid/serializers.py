from rest_framework import serializers
from .models import CovidData


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CovidData
        fields = '__all__'
        # 모델 User의 모든 field를 serializer함.