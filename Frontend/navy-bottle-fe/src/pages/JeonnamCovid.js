import React from 'react';
import '../styles/JeonnamCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper } from '../components/fixComponent';
import jeonnam_img from '../img/background/Jeonnam_covid_img.jpg';
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

const JeonnamCovid = () => {
  let zoom_in = 1 / (window.devicePixelRatio * 0.8);

  window.onresize = function () {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1 / (zoom_in * 0.8);
    console.log(zoom_in);
    window.location.reload();
  };

  return (
    <div className="jeonnam-covid-body-wrapper">
      <FixWrapper zoom_in={zoom_in}>
        <FixMapIMGWrapper>
          <img
            src={jeonnam_img}
            alt="jeonnam_map_img"
            className="jeonnam_img"
          />
        </FixMapIMGWrapper>
      </FixWrapper>
      <MapInformationRender
        hospital_type="hospital"
        zoom_in={zoom_in}
        hospital_top={64.5}
        hospital_left={52.45}
        name="강진의료원"
        marker_top={60}
        marker_left={56.57}
        color="green"
      />

      <MapInformationRender
        hospital_type="hospital"
        zoom_in={zoom_in}
        hospital_top={55}
        hospital_left={39.05}
        name="목포시의료원"
        marker_top={50.27}
        marker_left={43.1}
        color="yellow"
      />

      <MapInformationRender
        hospital_type="hospital"
        zoom_in={zoom_in}
        hospital_top={41.5}
        hospital_left={77.25}
        name="순천의료원"
        marker_top={37}
        marker_left={81.3}
        color="red"
      />

      <MapInformationRender
        hospital_type="center"
        zoom_in={zoom_in}
        hospital_top={41.5}
        hospital_left={52.1}
        name="나주 생활치료센터"
        marker_top={37}
        marker_left={56.12}
        color="red"
      />

      <CovidCurrentStaus
        city="Jeonnam"
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

export default JeonnamCovid;
