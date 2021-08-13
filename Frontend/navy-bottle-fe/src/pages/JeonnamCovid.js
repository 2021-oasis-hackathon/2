import React from 'react';
import '../styles/JeonnamCovid.scss'
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import jeonnam_img from '../img/background/Jeonnam_covid_img.jpg';
import MarkerRenderComponet from '../components/MarkerRenderComponet';

const JeonnamCovid = () => {
  return (
    <div className="jeonnam-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={jeonnam_img} alt="jeonnam_map_img" className="jeonnam_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet top={37.9} left={58.4} color='green'/>
      <MarkerRenderComponet top={31.5} left={62.75} color='green'/>
      <MarkerRenderComponet top={26.2} left={58.7} color='green'/>
      <MarkerRenderComponet top={20.38} left={42.25} color='yellow'/>
      <MarkerRenderComponet top={35.2} left={47.1} color='yellow'/>
      <MarkerRenderComponet top={65} left={72.74} color='red'/>

      <div className="jeonnam-covid-body">

      </div>
    </div>
  );
};

export default JeonnamCovid;