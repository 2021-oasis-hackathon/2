import React from 'react';
import '../styles/JeonbukCovid.scss'
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import jeonbux_img from '../img/background/Jeonbuk_covid_img.jpg';

const JeonbukCovid = () => {
  return (
    <div className="jeonbuk-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={jeonbux_img} alt="jeonbux_map_img" className="jeonbux_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <div className="jeonnam-covid-body">

      </div>
    </div>
  );
};

export default JeonbukCovid;