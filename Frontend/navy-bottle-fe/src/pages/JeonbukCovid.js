import React, { useState } from 'react';
import '../styles/JeonbukCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper } from '../components/fixComponent';
import jeonbuk_img from '../img/background/Jeonbuk_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';
import CovidRegionSelectBar from '../components/CovidRegionSelectBar';
import MapInformationRender from '../components/MapInformationRender';


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

const JeonbukCovid = () => {

  const [renderInformation, setRenderInformation] = useState('');

  let zoom_in = 1 / (window.devicePixelRatio * 0.8);

  window.onresize = function () {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1 / (zoom_in * 0.8);
    console.log(zoom_in);
    window.location.reload();
  };

  return (
    <div className="jeonbuk-covid-body-wrapper">
      <FixWrapper zoom_in={zoom_in}>
        <FixMapIMGWrapper>
          <img
            src={jeonbuk_img}
            alt="jeonbux_map_img"
            className="jeonbuk_img"
          />
        </FixMapIMGWrapper>
      </FixWrapper>

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="예수병원"
        color="green"
      />
      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="전북대병원"
        color="green"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="원광대병원"
        color="green"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        hospital_type="hospital"
        zoom_in={zoom_in}
        name="군산의료원"
        color="yellow"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="남원의료원"
        color="red"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        hospital_type="center"
        zoom_in={zoom_in}
        name="김제생활치료센터"
        color="yellow"
      />

      <CovidCurrentStaus
        city="Jeonbuk"
        zoom_in={zoom_in}
        date="08.13.00"
        infect="3,644"
        infectplus="15"
        wait="128"
        waitplus="7"
        cure="203"
        cureplus="11"
      ></CovidCurrentStaus>
      <CovidHospitalList zoom_in={zoom_in}></CovidHospitalList>
      <CovidHospitalSearch zoom_in={zoom_in}></CovidHospitalSearch>
      <CovidSeriousPatient zoom_in={zoom_in} sick="1,203"></CovidSeriousPatient>
      <CovidMildPatient zoom_in={zoom_in} sick="2,123"></CovidMildPatient>
      <CovidRegionSelectBar zoom_in={zoom_in}></CovidRegionSelectBar>
    </div>
  );
};

export default JeonbukCovid;
