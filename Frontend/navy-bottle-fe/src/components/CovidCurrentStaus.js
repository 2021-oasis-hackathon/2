import React from 'react';
import { FixWrapper } from './fixComponent';
import styled from 'styled-components';

const CovidCurrentStausBodyWrapper = styled.div`
  position: absolute;
  top: 4.2%;
  left: 4.7%;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 23%;
  height: 25.2%;
`;

const CovidCurrentStausBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  color: #707070;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CovidCurrentStausTitle = styled.h1`
  font-weight: bold;
`;

const CovidCurrentStausDate = styled.text``;

const CovidCurrentStausText = styled.text``;

const CovidCurrentStausData = styled.text`
  color: #ff7b7b;
  font-weight: bold;
`;

const CovidCurrentStausIncrease = styled.text``;

const CovidCurrentStausVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12%;
`;

const CovidCurrentStausHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CovidCurrentStaus = ({ city }) => {
  return (
    <FixWrapper>
      <CovidCurrentStausBodyWrapper>
        <CovidCurrentStausBody>
          <CovidCurrentStausHorizontal>
            {city === 'Gwangju' && (
              <CovidCurrentStausTitle>광주광역시</CovidCurrentStausTitle>
            )}
            {city === 'Jeonbuk' && (
              <CovidCurrentStausTitle>전북</CovidCurrentStausTitle>
            )}
            {city === 'Jeonnam' && (
              <CovidCurrentStausTitle>전남</CovidCurrentStausTitle>
            )}
            <CovidCurrentStausDate>(08.13.00시 기준)</CovidCurrentStausDate>
          </CovidCurrentStausHorizontal>
          <CovidCurrentStausHorizontal>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>확진환자</CovidCurrentStausText>
              <CovidCurrentStausData>3,644</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                전일대비 (+15)
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>병상대기자</CovidCurrentStausText>
              <CovidCurrentStausData>128</CovidCurrentStausData>
              <CovidCurrentStausIncrease>(+7)</CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>치료중</CovidCurrentStausText>
              <CovidCurrentStausData>203</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                전일대비 (+11)
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
          </CovidCurrentStausHorizontal>
        </CovidCurrentStausBody>
      </CovidCurrentStausBodyWrapper>
    </FixWrapper>
  );
};

export default CovidCurrentStaus;
