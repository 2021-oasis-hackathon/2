from django.urls import path
from . import views

app_name = 'covid_api'
urlpatterns = [
    path('', views.CovidDataView.as_view()),  # User에 관한 API를 처리하는 view로 Request를 넘김
]
