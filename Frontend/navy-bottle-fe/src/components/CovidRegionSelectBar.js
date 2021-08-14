import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gwangju_icon from '../img/region_icon/Gwangju_icon.png';
import Jeonbuk_icon from '../img/region_icon/Jeonbuk_icon.png';
import Jeonnam_icon from '../img/region_icon/Jeonnam_icon.png';
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
const CovidRegionSelectBarBodyWrapper = styled.div`
  position: absolute;
  top: 4.17%;
  left: 93.54%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 1.51%;
  height: 10.56%;
`;

const CovidRegionSelectBarBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:3px;
  background-color: #dddddd;
  display: flex;

  :hover{
      background-color: #c9c9c9;
  }
`;

const HiddenCovidRegionSelectBarBodyWrapper = styled.div`
  position: absolute;
  top: 4.63%;
  right: 5.68%;
  z-index: 9;
  width: ${props=>props.hiddonWidth}%;
  height: 9.72%;

  transition: ease-in-out 1s;
`;

const HiddenCovidRegionSelectBarBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius:5px;
  background-color: #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.5;
`;

const HiddinImgArea = styled.div`
  display: flex;
  position: relative;
  height: 80%;
  width: 24%;

  :hover{
    height: 90%;
    width: 28%;
  }
`;

const HiddenImg = styled.img`
    width: 100%;
    height: 100%;
`;

const CovidRegionSelectBar = ({zoom_in}) => {

  const [isOpenSelectBar,setIsOpenSelectBar] = useState(false);
  const [hiddonWidth,setHiddenWith] = useState(0);
  useEffect(()=>{
    if(isOpenSelectBar===false){
      setHiddenWith(0);
    }else{
      setHiddenWith(23.54);
    }
  },[isOpenSelectBar])

  const openEvent =() =>{
    setIsOpenSelectBar(!isOpenSelectBar);
  }

  return (
    <FixWrapper zoom_in={zoom_in}>
      <HiddenCovidRegionSelectBarBodyWrapper hiddonWidth={hiddonWidth}>
        <HiddenCovidRegionSelectBarBody>
          <HiddinImgArea>
            <Link to="/GwangjuCOVID">
              <HiddenImg src={Gwangju_icon} alt="Gwangju_icon"/>
            </Link>
          </HiddinImgArea>


          <HiddinImgArea>
            <Link to="/JeonbukCOVID">
              <HiddenImg src={Jeonbuk_icon} alt="Jeonbuk_icon"/>
            </Link>
          </HiddinImgArea>


          <HiddinImgArea>
            <Link to="/JeonnamCOVID">
              <HiddenImg src={Jeonnam_icon} alt="Jeonnam_icon"/>
            </Link>
          </HiddinImgArea>

        </HiddenCovidRegionSelectBarBody>
      </HiddenCovidRegionSelectBarBodyWrapper>
      <CovidRegionSelectBarBodyWrapper>
        <CovidRegionSelectBarBody onClick={(e)=>(openEvent())}>
        </CovidRegionSelectBarBody>
      </CovidRegionSelectBarBodyWrapper>
    </FixWrapper>
  );
};

export default CovidRegionSelectBar;