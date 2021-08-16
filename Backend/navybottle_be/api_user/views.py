#C:\Users\chungjung\Venv\NavyBottle\navybottleBE\Scripts

from rest_framework.views import APIView
from rest_framework.response import Response
 
class UserView(APIView):
    def get(self, request):
        return Response("ok", status=200)#테스트용 Response