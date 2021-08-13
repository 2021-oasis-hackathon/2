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

const CovidMildPatientBodyWrapper = styled.div`
  position: absolute;
  top: 30.65%;
  left: 11.61%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 5.99%;
  height: 10.65%;
`;

const CovidMildPatientBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #dddddd;
  display: flex;
`;

const CovidMildPatientTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  color: #707070;
  font-size: 2%;
`;

const CovidMildPatient = ({zoom_in}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidMildPatientBodyWrapper>
        <CovidMildPatientBody>
          <CovidMildPatientTitle>경증/무증상 환자</CovidMildPatientTitle>
        </CovidMildPatientBody>
      </CovidMildPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidMildPatient;
