import React from 'react';
import styled from 'styled-components';
import TreatmentInformation from './InformationRender/TreatmentInformation';

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

const RenderInformation = ({zoom_in, hospital_name ,hospital_bed_number ,percent }) => {
  const hospital_type = HospitalTypeDict[hospital_name][0];
  return (
    <>
      {hospital_type==='center' && <TreatmentInformation zoom_in={zoom_in} hospital_name={hospital_name} hospital_bed_number={hospital_bed_number} percent={percent}  />}
    </>
  );
};

export default RenderInformation;