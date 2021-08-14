import React from 'react';
import '../styles/GwangjuCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper } from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import HospitalRenderComponet from '../components/HospitalRenderComponent';
import CenterRenderComponet from '../components/CenterRenderComponent';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';

import CovidRegionSelectBar from '../components/CovidRegionSelectBar';
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

const GwangjuCovid = () => {
  let zoom_in = 1 / (window.devicePixelRatio * 0.8);

  window.onresize = function () {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1 / (zoom_in * 0.8);
    window.location.reload();
  };

  return (
    <div className="gwangju-covid-body-wrapper">
      <FixWrapper zoom_in={zoom_in}>
        <FixMapIMGWrapper>
          <img
            src={gwangju_img}
            alt="gwangju_map_img"
            className="gwangju_img"
          />
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={24.5}
        left={57.15}
        color="green"
      />
      <HospitalRenderComponet
        zoom_in={zoom_in}
        top={29}
        left={53.03}
        name="광주보훈병원"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={43.4}
        left={53.7}
        color="yellow"
      />
      <CenterRenderComponet
        zoom_in={zoom_in}
        top={48}
        left={49.65}
        name="광주생활치료센터"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={42.7}
        left={76.4}
        color="red"
      />
      <HospitalRenderComponet
        zoom_in={zoom_in}
        top={47.2}
        left={72.32}
        name="조선대병원"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={61}
        left={71.15}
        color="green"
      />

      <HospitalRenderComponet
        zoom_in={zoom_in}
        top={65.6}
        left={67.05}
        name="빛고을던남대병원"
      />

      <CovidCurrentStaus
        city="Gwangju"
        zoom_in={zoom_in}
        date="08.13.00"
        infect="900"
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

export default GwangjuCovid;
