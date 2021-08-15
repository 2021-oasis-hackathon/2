import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HospitalInfo from './logic/HospitalInfo';
import { BasicData } from './Data/BasicData';

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

const CovidHospitalListBodyWrapper = styled.div`
  position: absolute;
  top: 50.09%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 18%;
  height: 45.74%;
`;

const CovidHospitalListBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #dddddd;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CovidHospitalListBodyList = styled.div`
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #979797;
`;

const CovidHospitalItemTitle = styled.div`
  color: #707070;
  font-weight: bold;
  font-size: 14px;
  padding-top: 12.4px;
  padding-right: 4px;
`;

const CovidHospitalItemBoxHor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 6px;
`;

const CovidHospitalItemBoxVer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  line-height: 12px;
`;

const CovidHospitalItemBox = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  flex-direction: row;
  font-size: 8px;
  margin-right: 15px;
  margin-left: 15px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  margin-top: 11.2px;
  display: flex;
  justify-content: space-between;
`;

const Traffic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
  width: 15%;
`;

const CovidHospitalListHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 86%;
  margin-top: 10px;
  padding-bottom: 5px;
`;

const CovidHospitalListTitle = styled.div`
  display: flex;
  position: relative;
  font-size: 15.78px;
  font-family: 'Noto Sans KR';
  color: #707070;
`;

const CovidHospitalListButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const CovidHospitalListButtonSerious = styled.button`
  display: flex;
  padding: 0;
  position: relative;
  height: 17px;
  width: 73.6px;
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: Noto Sans KR;
  color: #707070;
  justify-content: center;
  align-items: center;
  font-size: 11.835px;
  border: none;

  margin-bottom: 4px;
  :hover {
    cursor: pointer;
    background-color: #bbbbbb;
  }
`;

const CovidHospitalListButtonMild = styled.button`
  display: flex;
  padding: 0;
  position: relative;
  height: 17px;
  width: 73.6px;
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-family: Noto Sans KR;
  color: #707070;
  justify-content: center;
  align-items: center;
  font-size: 11.835px;
  border: none;

  :hover {
    cursor: pointer;
    background-color: #bbbbbb;
  }
`;

const Red = styled.div`
  color: #ff7b7b;
`;
const Yellow = styled.div`
  color: #ffc77d;
`;
const Green = styled.div`
  color: #7cdfae;
`;

export const CovidHospitalItem = ({ hospital, phone, location }) => {
  const [data, setData] = useState('');

  return (
    <div>
      <CovidHospitalItemBox>
        <CovidHospitalItemBoxVer>
          <CovidHospitalItemBoxHor>
            <CovidHospitalItemTitle>
              <div>{hospital}</div>
            </CovidHospitalItemTitle>
            <div>{phone}</div>
          </CovidHospitalItemBoxHor>
          <div>{location}</div>
        </CovidHospitalItemBoxVer>
        <Traffic>
          {data > 66 && <Red>혼잡</Red>}
          {data > 33 && data < 66 && <Yellow>우려</Yellow>}
          {data < 33 && <Green>원활</Green>}
        </Traffic>
        <HospitalInfo name={hospital} setData={setData} />
      </CovidHospitalItemBox>
    </div>
  );
};

const CovidHospitalList = ({ zoom_in }) => {

  const [buttonClick, setButtonClick] = useState('hospital');
  const [seriousBackground, setSeriousBackground] = useState('#EAEAEA');
  const [mildBackground, setMildBackground] = useState('#EAEAEA');
  const selectButton = (e) => {
    if (e.target.value === 'hospital') {
      setButtonClick('hospital');
    }
    if (e.target.value === 'center') {
      setButtonClick('center');
    }
  };

  useEffect(() => {
    if (buttonClick === 'hospital') {
      setSeriousBackground('#bbbbbb');
      setMildBackground('#EAEAEA');
    }
    if (buttonClick === 'center') {
      setSeriousBackground('#EAEAEA');
      setMildBackground('#bbbbbb');
    }
  }, [buttonClick]);


  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidHospitalListBodyWrapper>
        <CovidHospitalListBody>
          <CovidHospitalListHeader>
            <CovidHospitalListTitle>혼잡지수 리스트</CovidHospitalListTitle>
            <CovidHospitalListButtonArea>
              <CovidHospitalListButtonSerious
                onClick={(e) => selectButton(e)}
                background={seriousBackground}
                value="hospital"
              >
                병원
              </CovidHospitalListButtonSerious>
              <CovidHospitalListButtonMild
                onClick={(e) => selectButton(e)}
                background={mildBackground}
                value="center"
              >
                생활치료센터
              </CovidHospitalListButtonMild>
            </CovidHospitalListButtonArea>
          </CovidHospitalListHeader>

          <CovidHospitalListBodyList>
            {Object.keys(BasicData).map((key , index) => 
              (buttonClick===BasicData[key][4] && <CovidHospitalItem hospital={key} phone={BasicData[key][2]} location={BasicData[key][3]}/>))}
          </CovidHospitalListBodyList>
        </CovidHospitalListBody>
      </CovidHospitalListBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalList;
