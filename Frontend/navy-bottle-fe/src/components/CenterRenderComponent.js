import React from 'react';
import styled from 'styled-components';
import Center from '../img/marker/center.png';

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

const MarkerWrapper = styled.div`
  position: absolute;
  width: 10%;
  height: 4.51%;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Marker = styled.img`
  position: relative;
  width: 12.8px;
  height: 11.2px;
  z-index: 1;
`;

const MarkerText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15.78px;
  font-weight: bold;
  color: #979797;
`;

const CenterRenderComponet = ({ zoom_in, top, left, name }) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <MarkerWrapper
        top={top}
        left={left}
        right={100 - left}
        bottom={100 - top}
      >
        <Marker src={Center} alt="center" />
        <MarkerText>{name}</MarkerText>
      </MarkerWrapper>
    </FixWrapper>
  );
};

export default CenterRenderComponet;
