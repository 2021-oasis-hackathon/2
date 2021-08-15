import React from 'react';
import styled from 'styled-components';

const TreatmentDict = {광주생활치료센터:[37.96,32.40,'062-613-8900','광주 광산구 소촌로152번길 53-84']}

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

const TreatmentInformationBodyWrapper = styled.div`
  position: absolute;
  top: ${props=>props.top}%;
  left: ${props=>props.left}%;
  z-index: 30;
  width: 17.92%;
  height: 13.15%;
`;

const TreatmentInformationBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #FFFFFF ;
  box-shadow: 3px 6px 10px #00000029;
  display: flex;
  flex-direction: column;
`;

const TreatmentInformationTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 11.046px;
  margin-top: 17px;
  height: 11.046px;
  justify-content: flex-start;
`;

const TreatmentName = styled.div`
  display: flex;
  font-size: 12.624px;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans KR;
  font-weight: bold;
  color: #707070;
  margin-bottom: 5px;
`;

const TreatmentPhone = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  align-items: baseline;
  justify-content: start;
  font-family: Noto Sans KR;
  font-weight:medium;
  color: #979797;
  margin-left: 5px;
`;

const TreatmentAdress = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11.046px;
  margin-top: 5px;
  font-size: 10px;
  font-family: Noto Sans KR;
  font-weight:medium;
  justify-content: flex-start;
  align-items: baseline;
  color: #979797;
`;

const TreatmentInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-left: 11.046px;
  margin-top: 10px;  
`;

const TreatmentBed = styled.div`
  display: flex;
  flex-direction: column;
`;

const TreatmentBedTitle = styled.div`
  display: flex;
  font-size: 12.624px;
  font-family: Noto Sans KR;
  font-weight: bold;
  color:#707070;
`;

const TreatmentBedNum = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin-left: 11.046px;
  margin-top: 10px;
  font-size: 21.303px;
  color: #FF7B7B;
  font-weight: bold;
`;

const TreatmentUtilization = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  margin-left: 17.358px;
`;

const TreatmentUtilizationTop = styled.div`
  display: flex;
  flex-direction: row;
`;


const TreatmentUtilizationTitle = styled.div`
  display: flex;
  font-size: 12.624px;
  font-family: Noto Sans KR;
  font-weight: bold;
  color:#707070;
`;

const TreatmentUtilizationTitleDis = styled.div`
  display: flex;
  font-size: 10px;
  font-family: Noto Sans KR;
  color:#979797;
  align-items: flex-end;
  margin-left: 5px;
`;

const TreatmentUtilizationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 12px;
`;

const TreatmentUtilizationBarGrayPart = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E7E7E7;
  width: 180px;
  height: 20.514px;
`;


const TreatmentUtilizationBarRedPart = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FF7B7B;
  width: ${props=>props.percent}%;
  height: 100%;
`;

const TreatmentInformation = ({zoom_in,hospital_name ,hospital_bed_number,percent }) => {

  const modal_info = TreatmentDict[hospital_name];
  const modal_top = modal_info[0];
  const modal_left = modal_info[1];
  const phone_number = modal_info[2];
  const adress = modal_info[3];

  return (

    <FixWrapper zoom_in={zoom_in}>
      <TreatmentInformationBodyWrapper top={modal_top} left={modal_left}>
        <TreatmentInformationBody>
          <TreatmentInformationTitle>
            <TreatmentName>{hospital_name}</TreatmentName>
            <TreatmentPhone>{phone_number}</TreatmentPhone>
          </TreatmentInformationTitle>
          <TreatmentAdress>{adress}</TreatmentAdress>
          <TreatmentInfo>
            <TreatmentBed>
              <TreatmentBedTitle>가용 병상</TreatmentBedTitle>
              <TreatmentBedNum>{hospital_bed_number}</TreatmentBedNum>
            </TreatmentBed>
            <TreatmentUtilization>
              <TreatmentUtilizationTop>
                <TreatmentUtilizationTitle>가동률</TreatmentUtilizationTitle>
                <TreatmentUtilizationTitleDis>(가용병상 / 전체병상)</TreatmentUtilizationTitleDis>
              </TreatmentUtilizationTop>
              <TreatmentUtilizationBar>
                <TreatmentUtilizationBarGrayPart>
                  <TreatmentUtilizationBarRedPart percent = {percent}>
                        
                  </TreatmentUtilizationBarRedPart>
                </TreatmentUtilizationBarGrayPart>
              </TreatmentUtilizationBar>
            </TreatmentUtilization>
          </TreatmentInfo>
        </TreatmentInformationBody>
      </TreatmentInformationBodyWrapper>
    </FixWrapper>
  );
};

export default TreatmentInformation;