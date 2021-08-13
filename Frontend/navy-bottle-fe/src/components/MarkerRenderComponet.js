import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';
import GreenDot from '../img/marker/Green_dot.png'
import RedDot from '../img/marker/Red_dot.png'
import YellowDot from '../img/marker/Yellow_dot.png'


const MarkerWrapper =  styled.div`
  position: absolute;
  top: ${props=>props.top}%;
  right: ${props=>props.right}%;
  bottom: ${props=>props.bottom}%;
  left: ${props=>props.left}%;
  z-index: 1;
  width: 1.8333%;
  height: 4.51%;
`
const Marker = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const MarkerRenderComponet = ({top , left , color}) => {
  return (
    <FixWrapper>
      <MarkerWrapper top={top} left={left} right={100-left} bottom={100-top}>
        {color === 'green' && <Marker src={GreenDot} alt="greenDot"/>}
        {color === 'red' && <Marker src={RedDot} alt="redDot"/>}
        {color === 'yellow' && <Marker src={YellowDot} alt="yellowDot"/>}
      </MarkerWrapper>
    </FixWrapper>
  );
};

export default MarkerRenderComponet;