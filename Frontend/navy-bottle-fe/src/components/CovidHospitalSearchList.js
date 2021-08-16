import React from 'react';
import styled from 'styled-components';
import { CovidHospitalItem } from './CovidHospitalList';
import { BasicData, HospitalCurrentDataDict } from './Data/Data';
import { sorted } from './logic/HospitalSort';

const CovidHospitalSearchListBodyWrapper = styled.div`
  position: absolute;
  top: 77.12%;
  left: 59.53%;
  bottom: 0;
  right: 0;
  z-index: 80;
  width: 17.03%;
  height: 18.07%;
`;

const CovidHospitalSearchListBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
`;

const CovidHospitalSearchListTitle = styled.div`
  display: flex;
  position: relative;
  margin-top: 17.358px;
  margin-left: 26.826px;
  margin-bottom: 6px;
  font-size: 18.147px;
  font-family: Noto Sans KR;
  color: #707070;
`;

const CovidHospitalSearchListBodyList = styled.div`
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #979797;
`;
const CovidHospitalSearchWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 79;
  width: 100%;
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

const CovidHospitalSearchList = ({ setIsSearch, isSearch, name }) => {
  return (
    <>
      {isSearch && (
        <>
          <CovidHospitalSearchWrapper
            onClick={(e) => setIsSearch(false)}
          ></CovidHospitalSearchWrapper>
          <CovidHospitalSearchListBodyWrapper>
            <CovidHospitalSearchListBody>
              <CovidHospitalSearchListTitle>
                최적 배정 리스트
              </CovidHospitalSearchListTitle>
              {name === 'serious' && (
                <CovidHospitalSearchListBodyList>
                  {sorted.map(
                    (key, index) =>
                      'hospital' === BasicData[key][4] &&
                      0 !==
                        HospitalCurrentDataDict[key][1] +
                          HospitalCurrentDataDict[key][3] && (
                        <CovidHospitalItem
                          hospital={key}
                          phone={BasicData[key][2]}
                          location={BasicData[key][3]}
                        />
                      )
                  )}
                </CovidHospitalSearchListBodyList>
              )}
              {name === 'mild' && (
                <CovidHospitalSearchListBodyList>
                  {sorted.map(
                    (key, index) =>
                      'center' === BasicData[key][4] &&
                      0 !==
                        HospitalCurrentDataDict[key][1] +
                          HospitalCurrentDataDict[key][3] && (
                        <CovidHospitalItem
                          hospital={key}
                          phone={BasicData[key][2]}
                          location={BasicData[key][3]}
                        />
                      )
                  )}
                  {sorted.map(
                    (key, index) =>
                      'hospital' === BasicData[key][4] &&
                      0 !==
                        HospitalCurrentDataDict[key][1] +
                          HospitalCurrentDataDict[key][3] && (
                        <CovidHospitalItem
                          hospital={key}
                          phone={BasicData[key][2]}
                          location={BasicData[key][3]}
                        />
                      )
                  )}
                </CovidHospitalSearchListBodyList>
              )}
            </CovidHospitalSearchListBody>
          </CovidHospitalSearchListBodyWrapper>
        </>
      )}
    </>
  );
};

export default CovidHospitalSearchList;
