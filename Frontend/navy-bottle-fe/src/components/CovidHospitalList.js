import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';

const CovidHospitalListBodyWrapper =  styled.div`
  position: absolute;
  top : 50.09%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 15.89%;
  height: 45.74%;
`

const CovidHospitalListBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:5%;
  background-color: #DDDDDD;
  display: flex;
`;

const CovidHospitalList = () => {
  return (
    <FixWrapper>
      <CovidHospitalListBodyWrapper>
        <CovidHospitalListBody>

        </CovidHospitalListBody>
      </CovidHospitalListBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalList;