import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';

const CovidSeriousPatientBodyWrapper =  styled.div`
  position: absolute;
  top : 30.65%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 5.99%;
  height: 10.65%;
`
const CovidSeriousPatientBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #DDDDDD;
  display: flex;
`;


const CovidSeriousPatient = () => {
  return (
    <FixWrapper>
      <CovidSeriousPatientBodyWrapper>
        <CovidSeriousPatientBody>

        </CovidSeriousPatientBody>
      </CovidSeriousPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidSeriousPatient;