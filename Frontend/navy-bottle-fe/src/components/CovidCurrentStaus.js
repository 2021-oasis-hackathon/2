import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const FixWrapper = styled.div`
  position: absolute;
  width: 1536px;
  zoom: ${(props) => props.zoom_in};

  ::before {
    content: '';
    display: flex;
    padding-top: 864px;
  }
`;

const CovidCurrentStausBodyWrapper = styled.div`
  position: absolute;
  top: 4.2%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 23%;
  height: 25.2%;
`;

const CovidCurrentStausBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  color: #707070;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: 0px 3px 6px #00000029;
`;

const CovidCurrentStausTitle = styled.h1`
  font: normal normal bold 27px Noto Sans KR;
  padding-right: 0px;
  padding-left: 36.708px;
`;

const CovidCurrentStausDate = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 12.688px;
  padding-left: 3px;
  padding-top: 18px;
  padding-bottom: 3.192px;
`;

const CovidCurrentStausText = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 15.96px;
  padding-left: 37.082px;
`;

const CovidCurrentStausData = styled.text`
  color: #ff7b7b;
  font: normal normal bold Noto Sans KR;
  font-size: 28.548px;
  padding-left: 38.304px;
  font-weight: bold;
`;

const CovidCurrentStausIncrease = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 12.688px;
  padding-left: 36.708px;
  padding-right: 0px;
  padding-top: 4.788px;
`;

const CovidCurrentStausVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0px;
`;

const CovidCurrentStausHorizontal = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 30.134px;
`;

const CovidCurrentStaus = ({
  city,
  zoom_in,
}) => {

  const [date , setDate] = useState('')
  const [infect ,setInfect] = useState('')
  const [infectplus ,setInfectplus] = useState('')
  const [wait , setWait] = useState('')
  const [waiInc , setWaitInc] = useState('')
  const [cure ,setCure] = useState('')
  const [cureInc , setCureInc] = useState('')
  const city_dict = {'Gwangju' : '광주' ,'Jeonbuk':'전북','Jeonnam':'전남'}
  const getcovid_url = '/covid/';

  let [covid_data,setCovid_data] = useState([])

  axios.get(getcovid_url).then(function(response){
    setCovid_data(response.data);
  })
    .catch(function(error){
      console.log(error);
    })

  useEffect(()=>{
    if(covid_data!==[])
    {
      for(let i=0; i<covid_data.length; i++)
      {
        if(covid_data[i]['location'] === city_dict[city])
        {
          setDate(covid_data[i]['update_date']);
          setInfect(covid_data[i]['confirmed_patient']);
          setInfectplus(covid_data[i]['confirmed_increase']);
          setWait( covid_data[i]['quarantine']);
          setCure(covid_data[i]['dead']);
          setWaitInc(covid_data[i]['quarantine_increase'])
          setCureInc(covid_data[i]['dead_increase'])
        }
      }
    }
  },[covid_data])

  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidCurrentStausBodyWrapper>
        <CovidCurrentStausBody>
          <CovidCurrentStausHorizontal>
            {city === 'Gwangju' && (
              <CovidCurrentStausTitle>광주광역시</CovidCurrentStausTitle>
            )}
            {city === 'Jeonbuk' && (
              <CovidCurrentStausTitle>전라북도</CovidCurrentStausTitle>
            )}
            {city === 'Jeonnam' && (
              <CovidCurrentStausTitle>전라남도</CovidCurrentStausTitle>
            )}
            <CovidCurrentStausDate>({date} 기준)</CovidCurrentStausDate>
          </CovidCurrentStausHorizontal>
          <CovidCurrentStausHorizontal>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>확진환자</CovidCurrentStausText>
              <CovidCurrentStausData>{infect}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                전일대비 (+{infectplus})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>격리중</CovidCurrentStausText>
              <CovidCurrentStausData>{wait}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                ({waiInc})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>사망자</CovidCurrentStausText>
              <CovidCurrentStausData>{cure}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                (+{cureInc})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
          </CovidCurrentStausHorizontal>
        </CovidCurrentStausBody>
      </CovidCurrentStausBodyWrapper>
    </FixWrapper>
  );
};

export default CovidCurrentStaus;
