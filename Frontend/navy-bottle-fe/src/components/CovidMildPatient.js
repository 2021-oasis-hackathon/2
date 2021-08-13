import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';

const CovidMildPatientBodyWrapper =  styled.div`
  position: absolute;
  top : 30.65%;
  left: 11.61%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 5.99%;
  height: 10.65%;
`

const CovidMildPatientBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #DDDDDD;
  display: flex;
`;


const CovidMildPatient = () => {
  return (
    <FixWrapper>
      <CovidMildPatientBodyWrapper>
        <CovidMildPatientBody>

        </CovidMildPatientBody>
      </CovidMildPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidMildPatient;