import React from 'react';
import '../styles/JeonbukCovid.scss'
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import jeonbux_img from '../img/background/Jeonbuk_covid_img.jpg';

const JeonbukCovid = () => {
  return (
    <div className="jeonbuk-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={jeonbux_img} alt="jeonbux_map_img" className="jeonbux_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet top={60} left={56.57} color='green'/>
      <MarkerRenderComponet top={50.27} left={43.13} color='yellow'/>
      <MarkerRenderComponet top={37} left={81.3} color='red'/>

      <div className="jeonnam-covid-body">

      </div>
    </div>
  );
};

export default JeonbukCovid;