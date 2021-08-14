import React, { useState } from 'react';
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
import RenderInformation from '../components/RenderInformation';
import HospitalInformationRender from '../components/HospitalInformationRender';

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

  const [renderInformation,setRenderInformation] = useState('');

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


      <HospitalInformationRender 
        zoom_in={zoom_in} 
        color="green" 
        name="광주보훈병원"
        hospital_top={29}
        hospital_left={53.03}
        marker_top={24.5}
        marker_left={57.15}
      ></HospitalInformationRender>

      <HospitalInformationRender 
        zoom_in={zoom_in} 
        color="yellow" 
        name="광주생활치료센터"
        hospital_top={48}
        hospital_left={49.65}
        marker_top={43.4}
        marker_left={53.7}
      ></HospitalInformationRender>

      <HospitalInformationRender 
        zoom_in={zoom_in} 
        color="red" 
        name="조선대병원"
        hospital_top={47.2}
        hospital_left={72.32}
        marker_top={42.7}
        marker_left={76.4}
      ></HospitalInformationRender>

      <HospitalInformationRender 
        zoom_in={zoom_in} 
        color="green" 
        name="빛고을전남대병원"
        hospital_top={65.6}
        hospital_left={67.05}
        marker_top={61}
        marker_left={71.15}
      ></HospitalInformationRender>

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

      {renderInformation==='' || <RenderInformation 
        zoom_in={zoom_in} 
        hospital_type="treatment-center"
        hospital_name={renderInformation}
        hospital_bed_number = "53"
        percent={90}
      ></RenderInformation>}
    </div>
  );
};

export default GwangjuCovid;
