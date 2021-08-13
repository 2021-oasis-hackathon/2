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
  border-radius:10px;
  background-color: #DDDDDD;
  display: flex;
`;

const CovidCurrentStaus = ({zoom_in}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidCurrentStausBodyWrapper>
        <CovidCurrentStausBody>
              
        </CovidCurrentStausBody>
      </CovidCurrentStausBodyWrapper>
    </FixWrapper>
  );
};

export default CovidCurrentStaus;