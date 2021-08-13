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
const CovidRegionSelectBarBodyWrapper = styled.div`
  position: absolute;
  top: 30.65%;
  left: 11.61%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 5.99%;
  height: 10.65%;
`;

const CovidRegionSelectBarBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #dddddd;
  display: flex;
`;


const CovidRegionSelectBar = ({zoom_in}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidRegionSelectBarBodyWrapper>
        <CovidRegionSelectBarBody>
        </CovidRegionSelectBarBody>
      </CovidRegionSelectBarBodyWrapper>
    </FixWrapper>
  );
};

export default CovidRegionSelectBar;