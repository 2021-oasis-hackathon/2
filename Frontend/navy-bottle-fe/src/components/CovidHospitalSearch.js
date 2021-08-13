import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';

const CovidHospitalSearchBodyWrapper =  styled.div`
  position: absolute;
  top : 77.12%;
  left: 78.02%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 17.03%;
  height: 18.07%;
`

const CovidHospitalSearchBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:5%;
  background-color: #DDDDDD;
  display: flex;
`;


const CovidHospitalSearch = () => {
  return (
    <FixWrapper>
      <CovidHospitalSearchBodyWrapper>
        <CovidHospitalSearchBody>

        </CovidHospitalSearchBody>
      </CovidHospitalSearchBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalSearch;