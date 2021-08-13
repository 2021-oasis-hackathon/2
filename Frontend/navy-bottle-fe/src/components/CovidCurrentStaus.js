import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';


const CovidCurrentStausBodyWrapper =  styled.div`
  position: absolute;
  top : 4.2%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 23%;
  height: 25.2%;
`

const CovidCurrentStausBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:5%;
  background-color: #DDDDDD;
  display: flex;
`;

const CovidCurrentStaus = () => {
  return (
    <FixWrapper>
      <CovidCurrentStausBodyWrapper>
        <CovidCurrentStausBody>
              
        </CovidCurrentStausBody>
      </CovidCurrentStausBodyWrapper>
    </FixWrapper>
  );
};

export default CovidCurrentStaus;