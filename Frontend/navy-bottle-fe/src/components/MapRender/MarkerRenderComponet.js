import React from 'react';
import styled from 'styled-components';
import GreenDot from '../../img/marker/Green_dot.png'
import RedDot from '../../img/marker/Red_dot.png'
import YellowDot from '../../img/marker/Yellow_dot.png'

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

const MarkerWrapper =  styled.div`
  position: absolute;
  top: ${props=>props.top}%;
  right: ${props=>props.right}%;
  bottom: ${props=>props.bottom}%;
  left: ${props=>props.left}%;
  z-index: 60;
  width: 1.8333%;
  height: 4.51%;

  transition: ease-out 0.2s;
  :hover{
    filter: brightness(80%);
    cursor: pointer;
  }
`
const Marker = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 60;
`;

const MarkerRenderComponet = ({zoom_in, top , left , color ,setRenderInformation , name}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <MarkerWrapper top={top} left={left} right={100-left} bottom={100-top} onClick={(e)=>setRenderInformation(name)}>
        {color <33 && <Marker src={GreenDot} alt="greenDot"/>}
        {color>=66  && <Marker src={RedDot} alt="redDot"/>}
        {color >=33 && color<66  && <Marker src={YellowDot} alt="yellowDot"/>}
      </MarkerWrapper>
    </FixWrapper>
  );
};

export default MarkerRenderComponet;