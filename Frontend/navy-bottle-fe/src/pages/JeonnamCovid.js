import React, { useState } from 'react';
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
import RenderInformation from '../components/RenderInformation';


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

  const [renderInformation, setRenderInformation] = useState('');

  let zoom_in = 1 / (window.devicePixelRatio * 0.8);



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
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="강진의료원"
        color="green"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="목포시의료원"
        color="yellow"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="순천의료원"
        color="red"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="나주생활치료센터"
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

      {renderInformation === '' || (
        <RenderInformation
          setRenderInformation={setRenderInformation}
          zoom_in={zoom_in}
          hospital_name={renderInformation}
          hospital_bed_number="53"
          operation_rate={65}
          hospital_worker={540}
          hospital_congestion={17}
          serious_bed={86}
          mild_bed={45}
          serious_bed_rate={86}
          mild_bed_rate={58}
        ></RenderInformation>
      )}
    </div>
  );
};

export default JeonnamCovid;
