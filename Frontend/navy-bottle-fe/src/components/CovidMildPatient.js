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
  border-radius: 10px;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: 0px 3px 6px #00000029;
`;

const CovidMildPatientTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #707070;
  font-size: 15.96px;
  font: normal normal medium Noto Sans KR;
  padding-top: 11.835px;
`;

const CovidMildPatientData = styled.div`
  font-size: 21.546px;
  font-weight: bold;
  color: #ff7b7b;
`;

const CovidMildPatient = ({ zoom_in, sick }) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidMildPatientBodyWrapper>
        <CovidMildPatientBody>
          <CovidMildPatientTitle>경증/무증상 환자</CovidMildPatientTitle>
          <CovidMildPatientData>{sick}</CovidMildPatientData>
        </CovidMildPatientBody>
      </CovidMildPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidMildPatient;
