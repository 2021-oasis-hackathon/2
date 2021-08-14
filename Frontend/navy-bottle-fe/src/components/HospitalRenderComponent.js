import React from 'react';
import styled from 'styled-components';
import Hospital from '../img/marker/hospital.png';

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
  width: 10%;
  height: 4.51%;
  position: absolute;
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
  width: 11.2px;
  height: 11.2px;
  z-index: 1;
`;

const MarkerText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #707070;
`;

const HospitalRenderComponet = ({ zoom_in, top, left, name }) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <MarkerWrapper
        top={top}
        left={left}
        right={100 - left}
        bottom={100 - top}
      >
        <Marker src={Hospital} />
        <MarkerText>{name}</MarkerText>
      </MarkerWrapper>
    </FixWrapper>
  );
};

export default HospitalRenderComponet;
