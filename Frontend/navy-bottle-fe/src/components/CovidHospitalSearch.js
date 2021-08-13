import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const FixWrapper =  styled.div`
  position: absolute;
  width: 100%;
  zoom: ${props=>props.zoom_in};

  ::before{
    content: "";
    display: flex;
    padding-top: 56.25%;
  }
`

const CovidHospitalSearchBodyWrapper =  styled.div`
  position: absolute;
  top: 77.12%;
  left: 78.02%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 17.03%;
  height: 18.07%;
  opacity: 0.7;
  :hover{
    opacity: 1;
  }
`;

const CovidHospitalSearchBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
`;

const CovidHospitalSearchTitle = styled.div`
  display: flex;
  position: relative;
  margin-top: 17.358px;
  margin-left: 26.826px;
  font-size: 18.147px;
  font-family: Noto Sans KR;
  color: #707070;
`;

const CovidHospitalSearchButtonArea= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-top: 18.147px;
  margin-left: 26.826px;
  width: 205.14px;
  height: 35.505px;
`;

const CovidHospitalSearchButtonSerious= styled.button`
  display: flex;
  padding: 0;
  position: relative;
  height: 100%;
  width: 96.258px;
  background-color:  ${props=>props.background} ;
  border-radius: 3.945px;
  font-family: Noto Sans KR;
  color: #707070;
  justify-content: center;
  align-items: center;
  font-size: 11.835px;
  border: none;

  :hover{
    cursor: pointer;
    background-color: #bbbbbb;
  }
`;

const CovidHospitalSearchButtonMild= styled.button`
  display: flex;
  padding: 0;
  position: relative;
  height: 100%;
  width: 96.258px;
  background-color: ${props=>props.background} ;
  border-radius: 3.945px;
  font-family: Noto Sans KR;
  color: #707070;
  justify-content: center;
  align-items: center;
  font-size: 11.835px;
  border: none;

  :hover{
    cursor: pointer;
    background-color: #bbbbbb;
  }
`;

const CovidHospitalSearch = ({zoom_in}) => {

  const [buttonClick , setButtonClick] = useState('');
  const [seriousBackground , setSeriousBackground] = useState('#EAEAEA');
  const [mildBackground , setMildBackground] = useState('#EAEAEA');
  const selectButton = (e) =>{
    if(e.target.value==='serious'){
      setButtonClick('serious');
    }
    if(e.target.value==='mild'){
      setButtonClick('mild');
    }
  }

  useEffect(()=>{
    if(buttonClick==='serious'){
      setSeriousBackground('#bbbbbb');
      setMildBackground('#EAEAEA');
    }
    if(buttonClick==='mild'){
      setSeriousBackground('#EAEAEA');
      setMildBackground('#bbbbbb');
    }

  },[buttonClick])

  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidHospitalSearchBodyWrapper>
        <CovidHospitalSearchBody>
          <CovidHospitalSearchTitle>최적 배정</CovidHospitalSearchTitle>
          <CovidHospitalSearchButtonArea>
            <CovidHospitalSearchButtonSerious onClick={(e)=>selectButton(e)} background={seriousBackground} value="serious">위중/중증상 환자</CovidHospitalSearchButtonSerious>
            <CovidHospitalSearchButtonMild onClick={(e)=>selectButton(e)} background={mildBackground} value="mild">경증/무증상 환자</CovidHospitalSearchButtonMild>
          </CovidHospitalSearchButtonArea>
        </CovidHospitalSearchBody>
      </CovidHospitalSearchBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalSearch;
