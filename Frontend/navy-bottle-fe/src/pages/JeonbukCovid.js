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




      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={37.9}
        left={58.4}
        color="green"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={31.5}
        left={62.75}
        color="green"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={26.2}
        left={58.7}
        color="green"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={20.38}
        left={42.25}
        color="yellow"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={35.2}
        left={47.1}
        color="yellow"
      />
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={65}
        left={72.74}
        color="red"
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
