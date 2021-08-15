import React, { useState } from 'react';
import styled from 'styled-components';
import HospitalInfo from './logic/HospitalInfo';

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
  align-items:center;
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
  margin-left:15px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  margin-top: 11.2px;
  display:flex;
  justify-content: space-between;
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

const Traffic = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  justify-content: center;
  font-weight:bold;
  font-size:16px;
  margin-right: 10PX;
  width: 15%;
`;

const Red = styled.div`
  color:#FF7B7B;
`;
const Yellow = styled.div`
  color:#FFC77D;
`;
const Green = styled.div`
  color:#7CDFAE;
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
          {(data>66 && <Red>혼잡</Red>)}
          {(data>33 && data<66 && <Yellow>우려</Yellow>)}
          {(data<33 && <Green>원활</Green>)}
        </Traffic>
        <HospitalInfo name={hospital} setData={setData} />
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
              <option value="병원">병원</option>
              <option value="생활치료센터">생활치료센터</option>
            </Selcetbar>
          </SelectWrapper>
          <CovidHospitalListBodyList>
            <CovidHospitalItem
              hospital="광주보훈병원"
              phone="062-602-6114"
              location="광주 광산구 첨단월봉로 99 보훈병원"
            />
            <CovidHospitalItem
              hospital="원광대병원"
              phone="063-859-1115"
              location="전라북도 익산시 신동 무왕로 895"
            />
            <CovidHospitalItem
              hospital="조선대병원"
              phone="062-220-3114"
              location="광주광역시 동구 서남동 필문대로 365"
            />
            <CovidHospitalItem
              hospital="빛고을전남대병원"
              phone="062-670-9500"
              location="광주광역시 남구 효덕동 덕남길 80 "
            />
            <CovidHospitalItem
              hospital="전북대병원"
              phone="062-1577-7877"
              location="전라북도 전주시 덕진구 금암2동 건지로 20"
            />
            <CovidHospitalItem
              hospital="군산의료원"
              phone="063-472-5000"
              location="전라북도 군산시 수송동 의료원로 27"
            />
            <CovidHospitalItem
              hospital="예수병원"
              phone="063-230-8114"
              location="전라북도 전주시 완산구 중화산1동 서원로 365"
            />
            <CovidHospitalItem
              hospital="남원의료원"
              phone="063-620-1114"
              location="전라북도 남원시 고죽동 충정로 365"
            />
            <CovidHospitalItem
              hospital="목포시의료원"
              phone="061-260-6500"
              location="전라남도 목포시 용해동 이로로"
            />
            <CovidHospitalItem
              hospital="순천의료원"
              phone="061-759-9114"
              location="전라남도 순천시 매곡동 서문성터길 2"
            />
            <CovidHospitalItem
              hospital="강진의료원"
              phone="061-433-3329"
              location="전라남도 강진군 서성리 305-26"
            />
            <CovidHospitalItem
              hospital="광주생활치료센터"
              phone="062-602-8900"
              location="광주 광산구 소촌로152번길 53-84"
            />
            <CovidHospitalItem
              hospital="나주생활치료센터"
              phone="061-357-9110"
              location="전라남도 나주시 다도면 신방로 255"
            />
            <CovidHospitalItem
              hospital="김제생활치료센터"
              phone="063-540-5600"
              location="전라북도 김제시 부량면 벽골제로 421"
            />
          </CovidHospitalListBodyList>
        </CovidHospitalListBody>
      </CovidHospitalListBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalList;
