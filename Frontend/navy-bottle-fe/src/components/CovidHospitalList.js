import React from 'react';
import styled from 'styled-components';

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
  width: 204.2px;
  height: 57.6px;
  background: #eaeaea 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  margin-top: 11.2px;
  padding-left: 11.2px;
`;

const CovidHospitalItemBox = styled.div`
  padding-left: 12.8px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12px;
  color: #979797;
  font-size: 7.89px;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 140px;
`;

const Selcetbar = styled.select`
  width: 83px;
  height: 15px;
  font-size: 10px;
  border: 1px solid #979797;
  border-radius: 8px;
  color: #979797;
  :focus {
    outline: none;
  }
  ::after {
    color: blue;
  }
  background-color: #eaeaea;
`;

const CovidHospitalItem = ({ hospital, phone, location }) => {
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
      </CovidHospitalItemBox>
    </div>
  );
};

const CovidHospitalList = ({ zoom_in }) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidHospitalListBodyWrapper>
        <CovidHospitalListBody>
          <SelectWrapper>
            <Selcetbar>
              <option value="1인당 부담수">1인당 부담수</option>
              <option value="가용병상">가용병상 순</option>
              <option value="가용인력">가용인력 순</option>
              <option value="가동률">가동률 순</option>
            </Selcetbar>
          </SelectWrapper>
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
