import React from 'react';
import '../styles/JeonbukCovid.scss'
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import jeonbuk_img from '../img/background/Jeonbuk_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';

const JeonbukCovid = () => {
  return (
    <div className="jeonbuk-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={jeonbuk_img} alt="jeonbux_map_img" className="jeonbuk_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet top={60} left={56.57} color='green'/>
      <MarkerRenderComponet top={50.27} left={43.1} color='yellow'/>
      <MarkerRenderComponet top={37} left={81.3} color='red'/>
      <MarkerRenderComponet top={37} left={56.12} color='red'/>

      <CovidCurrentStaus></CovidCurrentStaus>
      <CovidHospitalList></CovidHospitalList>
      <CovidHospitalSearch></CovidHospitalSearch>
      <CovidSeriousPatient></CovidSeriousPatient>
      <CovidMildPatient></CovidMildPatient>
    </div>
  );
};

export default JeonbukCovid;