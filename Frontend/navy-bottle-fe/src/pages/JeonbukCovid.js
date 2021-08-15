import React from 'react';
import '../styles/JeonbukCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper } from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import jeonbuk_img from '../img/background/Jeonbuk_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';
import CovidRegionSelectBar from '../components/CovidRegionSelectBar';
import CenterRenderComponet from '../components/CenterRenderComponent';
import RenderInformation from '../components/RenderInformation';
import HospitalInformationRender from '../components/HospitalInformationRender';

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
      <HospitalInformationRender
        zoom_in={zoom_in}
        hospital_top={42.3}
        hospital_left={54.25}
        name="예수병원"
        marker_top={37.9}
        marker_left={58.4}
        color="green"
      />
      <HospitalInformationRender
        zoom_in={zoom_in}
        hospital_top={36}
        hospital_left={58.67}
        name="전북대병원"
        marker_top={31.5}
        marker_left={62.75}
        color="green"
      />

      <HospitalInformationRender
        zoom_in={zoom_in}
        hospital_top={30.7}
        hospital_left={54.56}
        name="원광대병원"
        marker_top={26.2}
        marker_left={58.7}
        color="green"
      />

      <HospitalInformationRender
        zoom_in={zoom_in}
        hospital_top={25}
        hospital_left={38.2}
        name="군산의료원"
        marker_top={20.38}
        marker_left={42.25}
        color="yellow"
      />

      <HospitalInformationRender
        zoom_in={zoom_in}
        hospital_top={69.5}
        hospital_left={68.67}
        name="남원의료원"
        marker_top={65}
        marker_left={72.74}
        color="red"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={35.2}
        left={47.1}
        color="yellow"
      />
      <CenterRenderComponet
        zoom_in={zoom_in}
        top={39.8}
        left={43}
        name="김제 생활치료센터"
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
