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

const CovidHospitalSearchBodyWrapper =  styled.div`
  position: absolute;
  top: 77.12%;
  left: 78.02%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 17.03%;
  height: 18.07%;
`;

const CovidHospitalSearchBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:10px;
  background-color: #dddddd;
  display: flex;
`;



const CovidHospitalSearch = ({zoom_in}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidHospitalSearchBodyWrapper>
        <CovidHospitalSearchBody></CovidHospitalSearchBody>
      </CovidHospitalSearchBodyWrapper>
    </FixWrapper>
  );
};

export default CovidHospitalSearch;
