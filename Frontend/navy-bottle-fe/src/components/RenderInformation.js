import React from 'react';
import styled from 'styled-components';
import { BasicData } from './Data/Data';
import TreatmentInformation from './InformationRender/TreatmentInformation';
import HospitalInformation from './InformationRender/HospitalInformation';


const RenderInformation = ({ 
  setRenderInformation,
  zoom_in, 
  hospital_name ,
  hospital_bed_number ,
  operation_rate,
  hospital_worker,
  hospital_congestion ,
  serious_bed,
  mild_bed,
  serious_bed_rate,
  mild_bed_rate
}) => {
  const hospital_type = BasicData[hospital_name][4];
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
        serious_bed_rate={serious_bed_rate}
        mild_bed={mild_bed}
        mild_bed_rate={mild_bed_rate}
      ></HospitalInformation>}
    </>
  );
};

export default RenderInformation;