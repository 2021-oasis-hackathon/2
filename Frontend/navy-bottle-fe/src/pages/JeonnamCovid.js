import React from 'react';
import '../styles/JeonnamCovid.scss'
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import jeonnam_img from '../img/background/Jeonnam_covid_img.jpg';

const JeonnamCovid = () => {
  return (
    <div className="jeonnam-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={jeonnam_img} alt="jeonnam_map_img" className="jeonnam_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <div className="jeonnam-covid-body">

      </div>
    </div>
  );
};

export default JeonnamCovid;