import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  opacity: 0.5;
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