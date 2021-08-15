import React from 'react';
import styled from 'styled-components';
import TreatmentInformation from './InformationRender/TreatmentInformation';
import HospitalInformation from './InformationRender/HospitalInformation';
const HospitalTypeDict = {'광주보훈병원':['hospital'] , 
  '광주생활치료센터':['center']  ,
  '조선대병원':['hospital'] ,
  '빛고을전남대병원':['hospital'],
  '예수병원':['hospital'],
  '전북대병원':['hospital'],
  '원광대병원':['hospital'],
  '군산의료원':['hospital'],
  '남원의료원':['hospital'],
  '김제생활치료센터':['center'],
  '강진의료원':['hospital'],
  '목포시의료원':['hospital'],
  '순천의료원':['hospital'],
  '나주생활치료센터':['center']
}


const RenderInformation = ({ 
  setRenderInformation,
  zoom_in, 
  hospital_name ,
  hospital_bed_number ,
  operation_rate,
  hospital_worker,
  hospital_congestion ,
  serious_bed,mild_bed
}) => {
  const hospital_type = HospitalTypeDict[hospital_name][0];
  return (
    <>
      {hospital_type==='center' && <TreatmentInformation setRenderInformation={setRenderInformation} zoom_in={zoom_in} hospital_name={hospital_name} hospital_bed_number={hospital_bed_number} percent={operation_rate}  />}
      {hospital_type==='hospital' && 
      <HospitalInformation 
        setRenderInformation={setRenderInformation}  
        zoom_in={zoom_in} 
        hospital_name={hospital_name}
        hospital_bed_number={hospital_bed_number}
        hospital_worker ={hospital_worker}
        hospital_congestion={hospital_congestion}
        operation_rate={operation_rate}
        serious_bed={serious_bed}
        mild_bed={mild_bed}
      ></HospitalInformation>}
    </>
  );
};

export default RenderInformation;