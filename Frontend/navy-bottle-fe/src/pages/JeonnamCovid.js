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
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="목포시의료원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="순천의료원"
      />

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="나주생활치료센터"
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

export default JeonnamCovid;
