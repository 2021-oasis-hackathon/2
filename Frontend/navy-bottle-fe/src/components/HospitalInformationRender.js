import React from 'react';
import HospitalRenderComponet from './HospitalRenderComponent';
import MarkerRenderComponet from './MarkerRenderComponet';

const HospitalInformationRender = ({ zoom_in, hospital_top, hospital_left, name, marker_top , marker_left , color }) => {
  return (
    <>
      <HospitalRenderComponet zoom_in={zoom_in} top={hospital_top} left={hospital_left} name={name}></HospitalRenderComponet>
      <MarkerRenderComponet zoom_in={zoom_in} top={marker_top} left={marker_left} color={color}></MarkerRenderComponet>
    </>
  );
};

export default HospitalInformationRender;