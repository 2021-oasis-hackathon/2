import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const FixWrapper = styled.div`
  position: absolute;
  width: 100%;
  zoom: ${(props) => props.zoom_in};

  ::before {
    content: '';
    display: flex;
    padding-top: 56.25%;
  }
`;

const CovidHospitalListBodyWrapper = styled.div`
  position: absolute;
  top: 50.09%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 15.89%;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10.8px;
  display: flex;
  flex-direction: column;
  width: 219.2px;
  height: 57.6px;
  background: #eaeaea 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  margin-top: 11.2px;
  padding-left: 11.2px;
`;

const options = [
  { value: '1인당 부담수', label: '1인당 부담수' },
  { value: '가용 병실', label: '가용 병실' },
  { value: '가용 인력', label: '가용 인력' },
];

const CovidHospitalItem = ({ hospital, phone, location }) => {
  return (
    <div>
      <CovidHospitalItemBoxVer>
        <CovidHospitalItemBoxHor>
          <CovidHospitalItemTitle>
            <div>{hospital}</div>
          </CovidHospitalItemTitle>
          <div>{phone}</div>
        </CovidHospitalItemBoxHor>
        <div>{location}</div>
      </CovidHospitalItemBoxVer>
    </div>
  );
};

const CovidHospitalList = ({ zoom_in }) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidHospitalListBodyWrapper>
        <CovidHospitalListBody>
          <Select options={options} />
          <CovidHospitalListBodyList>
            <CovidHospitalItem
              hospital="광주보훈병원"
              phone="062-602-6114"
              location="광주 광산구 첨단월봉로 99 보훈병원"
            />
            <CovidHospitalItem
              hospital="광주 생활치료센터"
              phone="062-602-8900"
              location="광주 광산구 소촌로152번길 53-84"
            />
            <CovidHospitalItem
              hospital="조선대병원"
              phone="1811-7474"
              location="광주 동구 필문대로 365 조선대학교병원"
            />
            <CovidHospitalItem
              hospital="조선대병원"
              phone="1811-7474"
              location="광주 동구 필문대로 365 조선대학교병원"
            />
            <CovidHospitalItem
              hospital="조선대병원"
              phone="1811-7474"
              location="광주 동구 필문대로 365 조선대학교병원"
            />
            <CovidHospitalItem
              hospital="조선대병원"
              phone="1811-7474"
              location="광주 동구 필문대로 365 조선대학교병원"
            />
          </CovidHospitalListBodyList>
        </CovidHospitalListBody>
      </CovidHospitalListBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalList;
