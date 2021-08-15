import React from 'react';
import styled from 'styled-components';

const HospitalDict = {
  '광주보훈병원':[18.06,29.74,'062-602-6114','광주 광산구 첨단월봉로 99 보훈병원'],
  '원광대병원':[14.35,63.96,'063-859-1115','전라북도 익산시 신동 무왕로 895'],
  '조선대병원':[20,49,'062-220-3114','광주광역시 동구 서남동 필문대로 365'],
  '빛고을전남대병원':[30,46,'062-670-9500','광주광역시 남구 효덕동 덕남길 80'],
  '군산의료원':[6,48,'063-472-5000','전라북도 군산시 수송동 의료원로 27'],
  '전북대병원':[9.42,68.90,'062-1577-7877','전라북도 전주시 덕진구 금암2동 건지로 20'],
  '예수병원':[28.15,30.36,'063-230-8114','전라북도 전주시 완산구 중화산1동 서원로 365'],
  '남원의료원':[55.85,44.06,'063-620-1114','전라북도 남원시 고죽동 충정로 365'],
  '강진의료원':[38.33,64.84,'061-433-3329','전라남도 강진군 서성리 305-26'],
  '목포시의료원':[33.98,51.04,'061-260-6500','전라남도 목포시 용해동 이로로'],
  '순천의료원':[26.20,48.65,'061-759-9114','전라남도 순천시 매곡동 서문성터길 2']
}

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

  background: conic-gradient(#EAEAEA  ${props=>props.operation_rate}deg , #FF7B7B ${props=>props.operation_rate}deg 360deg);
  border-radius:200px;
`;

const HospitalbedGraphWrapper= styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-top: 15.78px;
`;


const HospitalInformation = ({zoom_in,
  hospital_name,
  hospital_bed_number,
  hospital_worker,
  hospital_congestion,
  operation_rate,
  serious_bed,
  mild_bed,
  setRenderInformation}) => {

  const modal_info = HospitalDict[hospital_name];
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

                </HospitalOPGraph>
              </HospitalOPGraphWrapper>
            </HospitalOPRateBody>

            <HospitalbedGraphWrapper>

            </HospitalbedGraphWrapper>
          </HospitalInfoBodyBottom>




        </HospitalInformationBody>
      </HospitalInformationBodyWrapper>

    </FixWrapper>
  );
};

export default HospitalInformation;