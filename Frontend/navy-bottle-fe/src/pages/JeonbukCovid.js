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
import RenderInformation from '../components/RenderInformation';
import { HospitalCurrentDataDict } from '../components/Data/Data';

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
      />
      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="전북대병원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="원광대병원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="군산의료원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="남원의료원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="김제생활치료센터"
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

      {renderInformation === '' || (
        <RenderInformation
          setRenderInformation={setRenderInformation}
          zoom_in={zoom_in}
          hospital_name={renderInformation}
          hospital_bed_number={HospitalCurrentDataDict[renderInformation][1]+HospitalCurrentDataDict[renderInformation][3]}
          operation_rate={(100*(HospitalCurrentDataDict[renderInformation][0]-HospitalCurrentDataDict[renderInformation][1] + HospitalCurrentDataDict[renderInformation][2]-HospitalCurrentDataDict[renderInformation][3]) / (HospitalCurrentDataDict[renderInformation][0]+HospitalCurrentDataDict[renderInformation][2])).toFixed(0)}
          hospital_worker={HospitalCurrentDataDict[renderInformation][4]}
          hospital_congestion={(100 * (HospitalCurrentDataDict[renderInformation][0]-HospitalCurrentDataDict[renderInformation][1] + HospitalCurrentDataDict[renderInformation][2]-HospitalCurrentDataDict[renderInformation][3]) / HospitalCurrentDataDict[renderInformation][4]).toFixed(0)}
          serious_bed={HospitalCurrentDataDict[renderInformation][1]}
          mild_bed={HospitalCurrentDataDict[renderInformation][3]}
          serious_bed_rate={(100*(HospitalCurrentDataDict[renderInformation][0]-HospitalCurrentDataDict[renderInformation][1]) / HospitalCurrentDataDict[renderInformation][0]).toFixed(0)}
          mild_bed_rate={(100*(HospitalCurrentDataDict[renderInformation][2]-HospitalCurrentDataDict[renderInformation][3]) / HospitalCurrentDataDict[renderInformation][2]).toFixed(0)}

        ></RenderInformation>
      )}
    </div>
  );
};

export default JeonbukCovid;
