# 2nd Team Repository
##### Team: Navy_Bottle

# 🚑🚑 Pandaemic Manager 🚑🚑 

## 🏥 Project Background:
  ~~~ 
  2020.01.20 
  ~~~
  대한민국에 첫 코로나 확진자가 발생했다. 7,8 개월 이후 확산이 전국으로 확대되면서, 코로나19 전담 가용 병상 문제가 조명되었다. 
  1년이 지난 오늘날, 아직도 가용 병상 문제는 완전히 해결되지 않았으며, 엎친데 덮친 격으로 가용 의료인력 및 물품 부족과 노동 환경 악화와 같은 문제들도 등장하고 있다.
  
  ~~~ 
  2021.08.11 
  ~~~
  약 일주일 전에 정부는 '코로나19 환자 배정 거부 치료병상 관리방안' 을 발표하면서, 더 이상 병원에서는 환자를 의료인력 사유로 거부할 수도 없으며,
  수용능력이 부족함에도 불구하고, 무조건적으로 환자를 수용해야하는 상황에 이르렀다. 
  그리하여, 보건의료자원을 통합관리할 플랫폼 및 거버넌스 구축이 절실하 상황이다.
  
  <img width="420" alt="image" src="https://user-images.githubusercontent.com/80466587/129830970-a6dfaad7-6667-4082-b99d-9d3b1f082f83.png">
  2021.08.11 코로나19 환자 배정 거부 치료병사 관리방안

## 🏥 Project Summary:

  팀 '네이비 보틀'의 __'팬데믹 매니저'__ 는 
  호남지역 내 병원/생활치료센터의 가용 병상 및 인력에 대한 상세정보를 취합 및 시각화하여 제공하는 서비스다. 
  
  <img width="647" alt="image" src="https://user-images.githubusercontent.com/80466587/129831737-0c6c8b46-9f35-4b6a-8286-44d5bd1afa64.png">

  정부에서 환자 배정 혹은 빠르 전원을 위해 병원과 시/도 환자상황실 간의 직통 연락망을 구축했지만, 아직 많이 부족한 상태다.
  코로나19 환자를 배정, 이송, 전원하는 과정에서 잔여 병상 위치 조회를 위하여, **병원 - 병원, 병원 - 시/도 상황실, 시/도 상황실 - 중앙사고수습본부** 와 같은
  여러 번의 one by one contact이 강제된다. 이 과정에서 많은 노력이 필요하며, 의료업무에만 몰두해도 부족한 의료종사자가 전화기를 붙들고 있는 시간이 늘어나고 있다.
  
  본 서비스는 호남지를 내 병원, 시/도 상황시, 중앙사고수습본부를 타겟으로 하고 있다. 많은 연락을 서로 거쳐서 수작업으로, 잔여 병상을 조회하는 시간을 아끼며,
  호남지역 내 시설들의 가동률을 한 페이지에 단번에 알아볼 수 있는 사이트를 개발하고자 했다.
  코로나19 확진자들을 병상하는 주체에게 이 서비스를 제공함으로써, 병상 가동률을 높이고,
  호남지역 시민의 안전을 증진시키는 효과를 기대하고 있다.
  
## 🏥 Main service of 'Pandemic Manager':

  1. 지역별 접근:
  
    호남지역 내 광주광역시, 전라북도, 전라남도 3개의 지역 모두 접근 가능하며 호환된다.
    
  2. 지역현황 조회:

    각 지역에 접속하게 되면, 확진자 수, 격리중, 사망자 수와 같으 유용한 정보를
    공공기관 API를 토대로 실시간으로 제공한다.
    
  3. 상세정보 창:
  
    각 지역의 시설에는 혼잡/우려/원활을 표시하느 마커가 존재하며, 마커를 클릭하면
    병원 및 생활치료센터의 주소 및 전화번호부터,코로나19 전담병상 종류별 잔여병사 개수, 가동률, 인력 등
    수많은 정보를 한 번에 조회하 수 있다.
    
  4. 혼잡도 랭킹:

    상세정보 창에 있는 데이터를 토대로 호남지역 내에서 가장 원활하 시설들을 정렬한 리스트 또하 제공한다.

## 🏥 Additional service: 

  1. 환자 전원 추천 기능:
  
    환자 수용 능력이 부족한 병원 같은 경우에는, 환자의 상태로 코로나19 환자 분류 기준에 따라 위증/중증/경증/무증상 중 하나를 선택하고,
    현재 위치를 입력하면, 인근 가장 원활한 시설을 추천해준다.

### 🏥 Tech Stack & More details:

  - Main(Frontend): 
    [React](https://ko.reactjs.org) and [Scss](https://sass-lang.com)
    
    Backend: 
    [dJango](https://www.djangoproject.com)
    
    More: using resftul API from Google Map & 공공데이터 포털
    
  - Browser compatibility: 
    ⚠️⚠️⚠️ We suggest using Chrome as fullscreen ([F11]) ⚠️⚠️⚠️
    
