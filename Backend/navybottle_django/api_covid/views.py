from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CovidDataserializers
from .models import CovidData
from rest_framework import status


class UserView(APIView):
    """
    GET /covid
    GET /covid/{locaton}
    """
    def get(self, request):
        covid_queryset = CovidData.objects.all()
        covid_queryset_serializer = CovidDataserializers(covid_queryset, many=True)
        return Response(covid_queryset_serializer.data , status=status.HTTP_200_OK)


