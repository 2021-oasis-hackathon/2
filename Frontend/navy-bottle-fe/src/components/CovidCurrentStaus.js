import React from 'react';
import styled from 'styled-components';

const FixWrapper = styled.div`
  position: absolute;
  width: 100%;
  zoom: ${(props) => props.zoom_in};

  ::before {
    content: '';
    display: flex;
    padding-top: 56.25%;
  }
`;

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
  border-radius: 10px;
  background-color: #dddddd;
  display: flex;
  flex-direction: column;
  color: #707070;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: 0px 3px 6px #00000029;
`;

const CovidCurrentStausTitle = styled.h1`
  font: normal normal bold 27px Noto Sans KR;
  padding-right: 0px;
  padding-left: 36.708px;
`;

const CovidCurrentStausDate = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 12.688px;
  padding-left: 3px;
  padding-top: 18px;
  padding-bottom: 3.192px;
`;

const CovidCurrentStausText = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 15.96px;
  padding-left: 37.082px;
`;

const CovidCurrentStausData = styled.text`
  color: #ff7b7b;
  font: normal normal bold Noto Sans KR;
  font-size: 28.548px;
  padding-left: 38.304px;
  font-weight: bold;
`;

const CovidCurrentStausIncrease = styled.text`
  font: normal normal medium Noto Sans KR;
  font-size: 12.688px;
  padding-left: 36.708px;
  padding-right: 0px;
  padding-top: 4.788px;
`;

const CovidCurrentStausVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0px;
`;

const CovidCurrentStausHorizontal = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 30.134px;
`;

const CovidCurrentStaus = ({
  city,
  zoom_in,
  date,
  infect,
  infectplus,
  wait,
  waitplus,
  cure,
  cureplus,
}) => {
  return (
    <FixWrapper zoom_in={zoom_in}>
      <CovidCurrentStausBodyWrapper>
        <CovidCurrentStausBody>
          <CovidCurrentStausHorizontal>
            {city === 'Gwangju' && (
              <CovidCurrentStausTitle>광주광역시</CovidCurrentStausTitle>
            )}
            {city === 'Jeonbuk' && (
              <CovidCurrentStausTitle>전라북도</CovidCurrentStausTitle>
            )}
            {city === 'Jeonnam' && (
              <CovidCurrentStausTitle>전라남도</CovidCurrentStausTitle>
            )}
            <CovidCurrentStausDate>({date}시 기준)</CovidCurrentStausDate>
          </CovidCurrentStausHorizontal>
          <CovidCurrentStausHorizontal>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>확진환자</CovidCurrentStausText>
              <CovidCurrentStausData>{infect}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                전일대비 (+{infectplus})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>병상대기자</CovidCurrentStausText>
              <CovidCurrentStausData>{wait}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                (+{waitplus})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
            <CovidCurrentStausVertical>
              <CovidCurrentStausText>치료중</CovidCurrentStausText>
              <CovidCurrentStausData>{cure}</CovidCurrentStausData>
              <CovidCurrentStausIncrease>
                (+{cureplus})
              </CovidCurrentStausIncrease>
            </CovidCurrentStausVertical>
          </CovidCurrentStausHorizontal>
        </CovidCurrentStausBody>
      </CovidCurrentStausBodyWrapper>
    </FixWrapper>
  );
};

export default CovidCurrentStaus;
