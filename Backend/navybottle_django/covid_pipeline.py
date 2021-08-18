import requests, bs4
from urllib.parse import urlencode, quote_plus, unquote
import json
import xmltodict
import os
from datetime import date, timedelta
import schedule

os.environ.setdefault('DJANGO_SETTINGS_MODULE','navybottle_django.settings')
import django
django.setup()
from api_covid.models import CovidData

def GetData():
    yesterday = date.today() - timedelta(1)
    yesterday_yes = date.today() - timedelta(2)
    yesterday_str = yesterday.strftime('%Y%m%d')
    yesterday_yes_str = yesterday_yes.strftime('%Y%m%d')

    startDt=yesterday_str
    endDt=yesterday_str

    location_dict = ['광주', '전남', '전북']
    url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson'
    url_key = '5S49x%2FwAQ2BNMXACvxn9qylA68ZcmDX3EqbPaI6EX6vlsqSKH%2FzjMOgCb%2Bsc3eMpiBuIn1axK%2FCDk3dlZ%2BaRHw%3D%3D'
    queryPrams  = '?serviceKey='+url_key+'&' + urlencode(
        {quote_plus('pageNo') : "1",
         quote_plus('numOfRows') : "10",
         quote_plus('startCreateDt'):startDt ,
         quote_plus('endCreateDt'):endDt})

    get_data = requests.get(url+queryPrams).text.encode('utf-8')
    data_dict = xmltodict.parse(get_data)
    data_json = json.dumps(data_dict)
    data_json_dict = json.loads(data_json)

    items = data_json_dict['response']['body']['items']['item']

    covid_info = []
    for i in items:
        # print(i)
        if(i['gubun'] in location_dict):
            location = i['gubun']
            update_date = i['stdDay']
            confirmed_patient = i['defCnt']
            confirmed_increase = i['incDec']
            quarantine = i['isolIngCnt']
            quarantine_increase = i['isolIngCnt']
            dead = i['deathCnt']
            dead_increase = i['deathCnt']
            covid_info.append([location,update_date,confirmed_patient,confirmed_increase,quarantine,dead,quarantine_increase,dead_increase])


    startDt = yesterday_yes_str
    endDt = yesterday_yes_str

    url_key = '5S49x%2FwAQ2BNMXACvxn9qylA68ZcmDX3EqbPaI6EX6vlsqSKH%2FzjMOgCb%2Bsc3eMpiBuIn1axK%2FCDk3dlZ%2BaRHw%3D%3D'
    queryPrams = '?serviceKey=' + url_key + '&' + urlencode(
        {quote_plus('pageNo'): "1",
         quote_plus('numOfRows'): "10",
         quote_plus('startCreateDt'): startDt,
         quote_plus('endCreateDt'): endDt})

    get_data = requests.get(url + queryPrams).text.encode('utf-8')
    data_dict = xmltodict.parse(get_data)
    data_json = json.dumps(data_dict)
    data_json_dict = json.loads(data_json)

    items = data_json_dict['response']['body']['items']['item']

    for i in items:
        # print(i)
        if(i['gubun'] in location_dict):
            yesterday_quarantine_increase = i['isolIngCnt']
            yesterday_dead_increase = i['deathCnt']

            for index , k in enumerate( covid_info ):
                if(k[0] == i['gubun']):
                    k = (int(covid_info[index][6]) - int(yesterday_quarantine_increase))
                    if(k>0):
                        covid_info[index][6] = '+' + str(k)
                    else:
                        covid_info[index][6] = str(k)
                    covid_info[index][7] = str(int(covid_info[index][7]) - int(yesterday_dead_increase))



    queryset = CovidData.objects.all()
    queryset.delete()

    for i in covid_info:
        CovidData(location=i[0], update_date=i[1], confirmed_patient=i[2], confirmed_increase=i[3], quarantine=i[4],dead=i[5] ,quarantine_increase=i[6] , dead_increase=i[7]).save()


if __name__ == '__main__':
    GetData()

