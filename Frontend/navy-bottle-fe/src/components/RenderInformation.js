import React from 'react';
import styled from 'styled-components';
import TreatmentInformation from './TreatmentInformation';

const RenderInformation = ({zoom_in, hospital_name, hospital_type ,hospital_bed_number ,percent}) => {
  return (
    <>
      {hospital_type==='treatment-center' && <TreatmentInformation zoom_in={zoom_in} hospital_name={hospital_name} hospital_bed_number={hospital_bed_number} percent={percent}  />}
    </>
  );
};

export default RenderInformation;