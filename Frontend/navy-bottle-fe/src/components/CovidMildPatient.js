import React,{ useRef,useEffect,useState } from 'react';
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
  border-radius:10%;
  background-color: #DDDDDD;
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
    font-size: ${props=>props.fontSize}px;
`;

const CovidMildPatient = () => {

  const windowSizeRef = useRef(null);
  const [fontHeight , setFontHeight] = useState(0);

  useEffect( () => {

    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    if(windowSizeRef.current){

      setFontHeight(windowSizeRef.current.offsetHeight);
      //     let font_width  = windowSizeRef.current.offsetWidth;
    }

  }, [windowSizeRef]);

  return (
    <FixWrapper ref = {windowSizeRef}>
      <CovidMildPatientBodyWrapper>
        <CovidMildPatientBody >
          <CovidMildPatientTitle>경증/무증상 환자</CovidMildPatientTitle>
        </CovidMildPatientBody>
      </CovidMildPatientBodyWrapper>
    </FixWrapper>
  );
};

export default CovidMildPatient;