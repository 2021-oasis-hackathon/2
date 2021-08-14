import React, { useState } from 'react';
import JeonbukCovid from './JeonbukCovid';
import JeonnamCovid from './JeonnamCovid';
import GwangjuCovid from './GwangjuCovid';
import '../styles/MainPage.scss';
import styled from 'styled-components';
import Gwangju_icon from '../img/Region_Main_icon/Gwangju_icon.png';
import Jeonbuk_icon from '../img/Region_Main_icon/Jeonbuk_icon.png';
import Jeonnam_icon from '../img/Region_Main_icon/Jeonnam_icon.png';
import { Link } from 'react-router-dom';

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

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: #707070;
  opacity: 0.5;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 36.85%;
  left: 23.33%;
  z-index: 100;
  width: 53.33%;
  height: 26.30%;
  background-color: #EAEAEA;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7.89px;
  display: flex;
  flex-direction: column;
`;

const MenuTitle = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans KR;
  font-size: 20.514px;
  font-weight: 500;
  color: #707070;
  padding-top: 11.046px;
  
`;

const MenuMapArea = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans KR;
  display: flex;
  flex-direction:row;
  align-items: center;
  margin-top: 4.4973px;
  flex-grow: 1;
  justify-content: space-evenly;
`;

const MenuImgArea = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuImg =styled.img`
  display: flex;
  position: relative;
  object-fit: contain;
  width: ${props=>props.width}%;

  :hover{
    width: ${props=>props.hover_width}%;;
    cursor: pointer;
  }
`;

const MainPage = () =>{

  const [currentPage , setCurrentPage] = useState('Gwangju');
  console.log(currentPage);

  let zoom_in = 1 / (window.devicePixelRatio * 0.8);

  window.onresize = function () {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1 / (zoom_in * 0.8);
    console.log(zoom_in);
    window.location.reload();
  };

  return(
    <>
      <div className="mainpage-body-wrapper">
        <FixWrapper zoom_in={zoom_in}>
          <MainWrapper></MainWrapper>
        </FixWrapper>

        <FixWrapper zoom_in={zoom_in}>
          <MenuWrapper>
            <MenuTitle>지역 선택</MenuTitle>
            <MenuMapArea>
              <MenuImgArea>
                <Link to="/GwangjuCOVID">
                  <MenuImg src={Gwangju_icon} alt="Gwangju_icon" width = {80} hover_width={82} onMouseEnter={(e)=>setCurrentPage('Gwangju')}></MenuImg>
                </Link>
              </MenuImgArea>
              <MenuImgArea>
                <Link to="/JeonbukCOVID">
                  <MenuImg src={Jeonbuk_icon} alt="Jeonbuk_icon" width = {80} hover_width={82} onMouseEnter={(e)=>setCurrentPage('Jeonbuk')}></MenuImg>
                </Link>
              </MenuImgArea>
              <MenuImgArea>
                <Link to="/JeonnamCOVID">
                  <MenuImg src={Jeonnam_icon} alt="Jeonnam_icon" width = {80} hover_width={82} onMouseEnter={(e)=>setCurrentPage('Jeonnam')}></MenuImg>
                </Link>
              </MenuImgArea>
            </MenuMapArea>
          </MenuWrapper>
        </FixWrapper>

        {currentPage==='Gwangju' && <GwangjuCovid></GwangjuCovid>}
        {currentPage==='Jeonnam' && <JeonnamCovid></JeonnamCovid>}
        {currentPage==='Jeonbuk' && <JeonbukCovid></JeonbukCovid>}
      </div>
    </>
  )
}

export default MainPage;