import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gwangju_icon from '../img/Region_Main_icon/Gwangju_icon.png';
import Jeonbuk_icon from '../img/Region_Main_icon/Jeonbuk_icon.png';
import Jeonnam_icon from '../img/Region_Main_icon/Jeonnam_icon.png';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

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
  border-radius: 3px;
  background-color: #dddddd;
  display: flex;
  box-shadow: 0px 3px 6px #00000029;

  :hover {
    background-color: #c9c9c9;
  }
`;

const HiddenCovidRegionSelectBarBodyWrapper = styled.div`
  position: absolute;
  top: 4.63%;
  right: 5.68%;
  z-index: 9;
  width: ${(props) => props.hiddonWidth}%;
  height: 9.72%;

  transition: ease-in-out 1s;
`;

const HiddenCovidRegionSelectBarBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.7;
`;

const HiddinImgArea = styled.div`
  display: flex;
  position: relative;
  width: 24%;
  object-fit: contain;
  opacity: 1;
`;

const HiddenImg = styled.img`
  width: 90%;
  height: 90%;

  transition: ease-in-out 0.5s;
  :hover {
    width: 98%;
  }
`;

const CircleButtonWrapper = styled.div`
  position: absolute;
  top: 8.33%;
  left: 92.92%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 1.25%;
  height: 2.22%;

`;

const CircleButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #FFFFFF ;
  border :2px solid #979797;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: ease-in-out 1s;
  transform: rotate(${props=>props.rotateDeg}deg);

  :hover{
    cursor: pointer;
  }
`;

const CovidRegionSelectBar = ({ zoom_in }) => {
  const [isOpenSelectBar, setIsOpenSelectBar] = useState(false);
  const [hiddonWidth, setHiddenWith] = useState(0);
  const [rotateDeg,setRotateDeg] = useState(0);
  useEffect(() => {
    if (isOpenSelectBar === false) {
      setHiddenWith(0);
      setRotateDeg(0)
    } else {
      setHiddenWith(23.54);
      setRotateDeg(180)
    }
  }, [isOpenSelectBar]);

  const openEvent = () => {
    setIsOpenSelectBar(!isOpenSelectBar);
  };

  return (
    <FixWrapper zoom_in={zoom_in}>
      <HiddenCovidRegionSelectBarBodyWrapper hiddonWidth={hiddonWidth}>
        <HiddenCovidRegionSelectBarBody>
          <HiddinImgArea>
            <Link to={{
              pathname : '/GwangjuCOVID',
              state : {
                render_hospital : ''
              }
            }}>
              <HiddenImg src={Gwangju_icon} alt="Gwangju_icon" />
            </Link>
          </HiddinImgArea>

          <HiddinImgArea>
            <Link to={{
              pathname : '/JeonbukCOVID',
              state : {
                render_hospital : ''
              }
            }}>
              <HiddenImg src={Jeonbuk_icon} alt="Jeonbuk_icon" />
            </Link>
          </HiddinImgArea>
          
          <HiddinImgArea>
            <Link to={{
              pathname : '/JeonnamCOVID',
              state : {
                render_hospital : ''
              }
            }}>
              <HiddenImg src={Jeonnam_icon} alt="Jeonnam_icon" />
            </Link>
          </HiddinImgArea>
        </HiddenCovidRegionSelectBarBody>
      </HiddenCovidRegionSelectBarBodyWrapper>
      <CovidRegionSelectBarBodyWrapper>
        <CovidRegionSelectBarBody
          onClick={(e) => openEvent()}
        ></CovidRegionSelectBarBody>
      </CovidRegionSelectBarBodyWrapper>

      <CircleButtonWrapper>
        <CircleButton onClick={(e) => openEvent()} rotateDeg={rotateDeg}>
          <AiOutlineLeft/>
        </CircleButton>
      </CircleButtonWrapper>
    </FixWrapper>
  );
};

export default CovidRegionSelectBar;
