import React from 'react';
import styled from 'styled-components';
import { BasicData } from '../Data/Data';


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

const HospitalInformationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 79;
  width: 100%;
  height: 100%;
  :hover{
    cursor: pointer
  }
`;

const HospitalInformationBodyWrapper = styled.div`
  position: absolute;
  top: ${props=>props.top}%;
  left: ${props=>props.left}%;
  z-index: 80;
  width: 24.01%;
  height: 35.65%;
`;

const HospitalInformationBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #FFFFFF ;
  box-shadow: 3px 6px 10px #00000029;
  display: flex;
  flex-direction: column;
`;

const HospitalInformationBodyTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 18.936px;
  margin-left: 17.358px;
  margin-right: 18.936px;
  height: 83.634px;
`;

const HospitalInformationBasic = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1; //row
  height: 100%;
`;

const HospitalInformationTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 18.936px;

  align-items: flex-end;
  font-family: Noto Sans KR;
  color: #707070;
  font-size: 12.624px;
  font-weight: bold;
`;

const HospitalPhone= styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  justify-content: flex-end;

  font-family: Noto Sans KR;
  color: #979797;
  font-size: 10px;
  font-weight: medium;
`;

const HospitalAdress = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 13.5813px;
  margin-top: 2px;

  justify-content: flex-end;
  font-family: Noto Sans KR;
  color: #979797;
  font-size: 10px;
  font-weight: medium;
`;

const Hospitalimage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width : 83.634px;
  height: 100%;
  background-color: #dddddd;
`;

const HospitalNumberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 9.468px;
  align-items: center;
  margin-right: 34.716px;
  justify-content: space-between;
`;

const HospitalNumberComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HospitalNumberBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 21.303px;
  width: 1.5px;
  background-color: #979797;
`;

const HospitalNumberTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  
  color:#707070;
  font-family: Noto Sans KR;
  font-size: 12.624px;
  font-weight: Bold;
`;

const HospitalNumberInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 4px;

  justify-content: center;
  align-items: center;
  
  color:#FF7B7B;
  font-family: Noto Sans KR;
  font-size: 21.303px;
  font-weight: Bold;
`;

const HospitalInfoBodyBottom = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: 12.624px;
  margin-left: 17.358px;
  margin-right: 22.881px;
  flex-direction: row;
`;

const HospitalOPRateBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 38.661px;
  width: 127.818px;

  align-items: center;
`;

const HospitalOPRateTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 18.936px;
  align-items: flex-end;

  font-family: Noto Sans KR;
  font-size: 12.624px;
  color: #707070;
  font-weight:bold;
`;

const HospitalOPRateDis = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 14.991px;
  align-items: flex-end;

  font-family: Noto Sans KR;
  font-size: 10.257px;
  color: #979797;
  font-weight: medium;
`;

const HospitalOPGraphWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HospitalOPGraph= styled.div`
  position: relative;
  display: flex;
  width: 127.818px;
  height: 127.818px;
  align-items: center;
  justify-content: center;

  background: conic-gradient(#EAEAEA  ${props=>props.operation_rate}deg , #FF7B7B ${props=>props.operation_rate}deg 360deg);
  border-radius:200px;
`;

const HospitalOPGraphHole= styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;

  background: #FFFFFF;
  border-radius: 100px;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  font-family: Noto Sans KR;
  font-weight: bold;
  color: #FF7B7B;
`;

const HospitalbedGraphWrapper= styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-top: 15.78px;
`;

const HospitalbedGraphBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const HospitalbedGraphTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 37.083px;
  width: 100%;
`
const HospitalbedGraphTitleWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const HospitalbedGraphTitle = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
    height: 18.936px;
    justify-content:flex-end;

    color:#707070;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 12.624px;
`

const HospitalbedGraphTitleDis = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
    height: 14.991px;
    justify-content:flex-end;

    color:#979797;
    font-family: Noto Sans KR;
    font-weight: medium;
    font-size: 10.257px;
`

const HospitalbedNumWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  flex-grow: 1;
`;

const HospitalbedNumTitle = styled.div`
  position: relative;
  flex-direction: column;
  margin-top: 6px;
  display: flex;
  height: 13.413px;
  justify-content: center;
  align-items: center;

  font-weight: medium;
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #979797;
`;

const HospitalbedNum = styled.div`
  position: relative;
  flex-direction: column;
  margin-top: 6px;
  display: flex;
  height: 18.936px;
  justify-content: center;
  align-items: center;

  font-weight: medium;
  font-family: Noto Sans KR;
  font-size: 12.624px;
  color: #FF7B7B;
`;

const HospitalGraphWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 18.936px;
  width: 100%;
  margin-top: 10px;
`;

const HospitalGraphPercent= styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  height: 100%;
  width: 25.248px;
  align-items: center;

  color: ${props=>props.color};
  font-weight: medium;
  font-family: Noto Sans KR;
  font-size: 12.624px;
`;

const HospitalGraph = styled.div`
  position: relative;
  display: flex;
  flex-grow: 100;
  margin-right: 3px;
  margin-left: 3px;

  
  background: linear-gradient(to right, #FF7B7B ${props=>props.percent}% ,#E7E7E7 ${props=>(100-props.percent)}% );
`;

const HospitalInformation = ({zoom_in,
  hospital_name,
  hospital_bed_number,
  hospital_worker,
  hospital_congestion,
  operation_rate,
  serious_bed,
  serious_bed_rate,
  mild_bed,
  mild_bed_rate,
  setRenderInformation}) => {

  const modal_info = BasicData[hospital_name];
  const modal_top = modal_info[0];
  const modal_left = modal_info[1];
  const phone_number = modal_info[2];
  const adress = modal_info[3];

  return (
    <FixWrapper zoom_in={zoom_in}>
      <HospitalInformationWrapper onClick={(e)=>{setRenderInformation('')}}/>
      <HospitalInformationBodyWrapper top={modal_top} left={modal_left}>
        <HospitalInformationBody>

          <HospitalInformationBodyTop>
            <HospitalInformationBasic>
              <HospitalInformationTitle>
                {hospital_name}
                <HospitalPhone>
                  {phone_number}
                </HospitalPhone>
              </HospitalInformationTitle>
              <HospitalAdress>
                {adress}
              </HospitalAdress>
              <HospitalNumberWrapper>
                <HospitalNumberComponent>
                  <HospitalNumberTitle>
                      가용 병상                      
                  </HospitalNumberTitle>
                  <HospitalNumberInfo>
                    {hospital_bed_number}
                  </HospitalNumberInfo>
                </HospitalNumberComponent>
                <HospitalNumberBar></HospitalNumberBar>
                <HospitalNumberComponent>
                  <HospitalNumberTitle>
                    인력
                  </HospitalNumberTitle>
                  <HospitalNumberInfo>
                    {hospital_worker}
                  </HospitalNumberInfo>
                </HospitalNumberComponent>
                <HospitalNumberBar></HospitalNumberBar>
                <HospitalNumberComponent>
                  <HospitalNumberTitle>
                    혼잡 지수        
                  </HospitalNumberTitle>
                  <HospitalNumberInfo>
                    {hospital_congestion}
                  </HospitalNumberInfo>
                </HospitalNumberComponent>
              </HospitalNumberWrapper>
            </HospitalInformationBasic>
            <Hospitalimage></Hospitalimage>
          </HospitalInformationBodyTop>

        

          <HospitalInfoBodyBottom>
            <HospitalOPRateBody>
              <HospitalOPRateTitle>가동률</HospitalOPRateTitle>
              <HospitalOPRateDis>( 가용병상 / 전체병상 )</HospitalOPRateDis>
              <HospitalOPGraphWrapper>
                <HospitalOPGraph operation_rate={360-(operation_rate/100) *360}>
                  <HospitalOPGraphHole>{operation_rate}%</HospitalOPGraphHole>
                </HospitalOPGraph>
              </HospitalOPGraphWrapper>
            </HospitalOPRateBody>


            <HospitalbedGraphWrapper>


              <HospitalbedGraphBody>
                <HospitalbedGraphTop>
                  <HospitalbedGraphTitleWrapper>
                    <HospitalbedGraphTitle>중증전담치료병상</HospitalbedGraphTitle>
                    <HospitalbedGraphTitleDis>(코로나 환자 기준)</HospitalbedGraphTitleDis>
                  </HospitalbedGraphTitleWrapper>

                  <HospitalbedNumWrapper>
                    <HospitalbedNumTitle>잔여병상</HospitalbedNumTitle>
                    <HospitalbedNum>{serious_bed}</HospitalbedNum>
                  </HospitalbedNumWrapper>
                </HospitalbedGraphTop>
                <HospitalGraphWrapper>
                  <HospitalGraphPercent color="#FF7B7B">{serious_bed_rate}%</HospitalGraphPercent>
                  <HospitalGraph percent = {serious_bed_rate}></HospitalGraph>
                  <HospitalGraphPercent color="#707070">{100-serious_bed_rate}%</HospitalGraphPercent>
                </HospitalGraphWrapper>
              </HospitalbedGraphBody>



              <HospitalbedGraphBody>
                <HospitalbedGraphTop>
                  <HospitalbedGraphTitleWrapper>
                    <HospitalbedGraphTitle>감염전담병원병상</HospitalbedGraphTitle>
                    <HospitalbedGraphTitleDis>(코로나 환자 기준)</HospitalbedGraphTitleDis>
                  </HospitalbedGraphTitleWrapper>

                  <HospitalbedNumWrapper>
                    <HospitalbedNumTitle>잔여병상</HospitalbedNumTitle>
                    <HospitalbedNum>{mild_bed}</HospitalbedNum>
                  </HospitalbedNumWrapper>
                </HospitalbedGraphTop>
                <HospitalGraphWrapper>
                  <HospitalGraphPercent color="#FF7B7B">{mild_bed_rate}%</HospitalGraphPercent>
                  <HospitalGraph percent = {mild_bed_rate}></HospitalGraph>
                  <HospitalGraphPercent color="#707070">{100-mild_bed_rate}%</HospitalGraphPercent>
                </HospitalGraphWrapper>
              </HospitalbedGraphBody>
            </HospitalbedGraphWrapper>
          </HospitalInfoBodyBottom>




        </HospitalInformationBody>
      </HospitalInformationBodyWrapper>

    </FixWrapper>
  );
};

export default HospitalInformation;