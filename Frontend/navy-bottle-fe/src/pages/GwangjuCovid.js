import React, { useEffect, useState } from 'react';
import '../styles/GwangjuCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper } from '../components/fixComponent';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';
import RenderInformation from '../components/RenderInformation';
import CovidRegionSelectBar from '../components/CovidRegionSelectBar';
import MapInformationRender from '../components/MapInformationRender';
import { useLocation} from 'react-router-dom';

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

const GwangjuCovid = () => {
  let location = useLocation();
  const [renderInformation, setRenderInformation] = useState('');

  useEffect(()=>{
    setRenderInformation(location.state.render_hospital)
  },[location])


  let zoom_in = 1 / (window.devicePixelRatio * 0.8);

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

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="광주보훈병원"
      ></MapInformationRender>

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="광주생활치료센터"
      ></MapInformationRender>

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="조선대병원"
      ></MapInformationRender>

      <MapInformationRender
        setRenderInformation={setRenderInformation}
        zoom_in={zoom_in}
        name="빛고을전남대병원"
      ></MapInformationRender>

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

export default GwangjuCovid;
