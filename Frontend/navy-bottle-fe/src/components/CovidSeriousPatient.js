import React from 'react';
import styled from 'styled-components';

const FixWrapper =  styled.div`
  position: absolute;
  width: 100%;
  zoom: ${props=>props.zoom_in};

  ::before{
    content: "";
    display: flex;
    padding-top: 56.25%;
  }
`

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


const CovidSeriousPatient = ({zoom_in}) => {
  return (
    <FixWrapper  zoom_in={zoom_in}>
      <CovidSeriousPatientBodyWrapper>
        <CovidSeriousPatientBody>

        </CovidSeriousPatientBody>
      </CovidSeriousPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidSeriousPatient;