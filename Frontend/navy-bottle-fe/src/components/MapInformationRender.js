import React from 'react';
import HospitalRenderComponet from './MapRender/HospitalRenderComponent';
import MarkerRenderComponet from './MarkerRenderComponet';
import CenterRenderComponet from './MapRender/CenterRenderComponent';

const MapInformationRender= ({  zoom_in, hospital_top, hospital_left, name, marker_top , marker_left , color ,hospital_type }) => {
  return (
    <>
      {hospital_type==='hospital' &&
      <HospitalRenderComponet zoom_in={zoom_in} top={hospital_top} left={hospital_left} name={name}></HospitalRenderComponet>}

      {hospital_type==='center' &&
      <CenterRenderComponet zoom_in={zoom_in} top={hospital_top} left={hospital_left} name={name}></CenterRenderComponet>}

      <MarkerRenderComponet zoom_in={zoom_in} top={marker_top} left={marker_left} color={color}></MarkerRenderComponet>
    </>
  );
};

export default MapInformationRender;