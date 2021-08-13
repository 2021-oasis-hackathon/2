import React from 'react';
import '../styles/GwangjuCovid.scss';
import { FixWrapper , FixMapIMGWrapper} from '../components/fixComponent';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';

const GwangjuCovid = () =>{
  return(
    <div className="gwangju-covid-body-wrapper">
      <FixWrapper>
        <FixMapIMGWrapper>
          <img src ={gwangju_img} alt="gwangju_map_img" className="gwangju_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <FixWrapper>
        <div className ="dot_wrapper">
          <div className= "dot"></div>
        </div>
      </FixWrapper>
      
      <div className="gwangju-covid-body">
      </div>
    </div>
  )
}

export default GwangjuCovid;