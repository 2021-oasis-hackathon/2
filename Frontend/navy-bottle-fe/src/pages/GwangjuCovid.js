import React from 'react';
import '../styles/GwangjuCovid.scss';
import { FixWrapper, FixMapIMGWrapper } from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';

const GwangjuCovid = () => {
  return (
    <div className="gwangju-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img
            src={gwangju_img}
            alt="gwangju_map_img"
            className="gwangju_img"
          />
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet top={24.5} left={57.15} color="green" />
      <MarkerRenderComponet top={43.4} left={53.7} color="yellow" />
      <MarkerRenderComponet top={42.7} left={76.4} color="red" />
      <MarkerRenderComponet top={61} left={71.15} color="green" />

      <CovidCurrentStaus city="Gwangju"></CovidCurrentStaus>
      <CovidHospitalList></CovidHospitalList>
      <CovidHospitalSearch></CovidHospitalSearch>
      <CovidSeriousPatient></CovidSeriousPatient>
      <CovidMildPatient></CovidMildPatient>
    </div>
  );
};

export default GwangjuCovid;
