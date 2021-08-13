import React from 'react';
import '../styles/GwangjuCovid.scss';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';

const GwangjuCovid = () =>{
  return(
    <div className="gwangju-covid-body-wrapper">
      <div className="gwangju-map-wrapper">
        <div className ="gwangju_img_wrapper">
          <img src ={gwangju_img} alt="gwangju_map_img" className="gwangju_img"/>
        </div>
      </div>

      <div className="gwangju-map-wrapper">
        <div className ="dot_wrapper">
          <div className= "dot"></div>
        </div>
      </div>
      
      <div className="gwangju-covid-body">
      </div>
    </div>
  )
}

export default GwangjuCovid;