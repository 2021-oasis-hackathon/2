import React from 'react';
import '../styles/GwangjuCovid.scss';
import styled from 'styled-components';
import { FixMapIMGWrapper} from '../components/fixComponent';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import gwangju_img from '../img/background/Gwangju_covid_img.jpg';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';

const FixWrapper =  styled.div`
  position: absolute;
  width: 100%;
  zoom: ${props=>props.zoom_in};

  ::before{
    content: "";
    display: flex;
    padding-top: 56.25%;
  }
`

const GwangjuCovid = () =>{

  let zoom_in = 1/(window.devicePixelRatio*0.8);

  window.onresize = function() {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1/(zoom_in*0.8)
    console.log(zoom_in)
  }

  return(
    <div className="gwangju-covid-body-wrapper">
      <FixWrapper zoom_in={zoom_in}>
        <FixMapIMGWrapper>
          <img src ={gwangju_img} alt="gwangju_map_img" className="gwangju_img"/>
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet zoom_in={zoom_in} top={24.5} left={57.15} color='green'/>
      <MarkerRenderComponet zoom_in={zoom_in} top={43.4} left={53.7} color='yellow'/>
      <MarkerRenderComponet zoom_in={zoom_in} top={42.7} left={76.4} color='red'/>
      <MarkerRenderComponet zoom_in={zoom_in} top={61} left={71.15} color='green'/>


      <CovidCurrentStaus zoom_in={zoom_in} ></CovidCurrentStaus>
      <CovidHospitalList zoom_in={zoom_in}></CovidHospitalList>
      <CovidHospitalSearch zoom_in={zoom_in}></CovidHospitalSearch>
    </div>
  )
}

export default GwangjuCovid;