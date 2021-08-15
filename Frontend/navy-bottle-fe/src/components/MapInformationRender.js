import React from 'react';
import HospitalRenderComponet from './MapRender/HospitalRenderComponent';
import MarkerRenderComponet from './MapRender/MarkerRenderComponet';
import CenterRenderComponet from './MapRender/CenterRenderComponent';

const MapInfoDict = {'광주보훈병원':['hospital',29,53.03,24.5,57.15] , 
  '광주생활치료센터':['center',48,49.65,43.4,53.7]  ,
  '조선대병원':['hospital',47.2,72.32,42.7,76.4] ,
  '빛고을전남대병원':['hospital',65.6,67.05,61,71.15],
  '예수병원':['hospital',42.3,54.25,37.9,58.4],
  '전북대병원':['hospital',36,58.67,31.5,62.75],
  '원광대병원':['hospital',30.7,54.56,26.2,58.7],
  '군산의료원':['hospital',25,38.2,20.38,42.25],
  '남원의료원':['hospital',69.5,68.67,65,72.74],
  '김제생활치료센터':['center',39.8,43,35.2,47.1],
  '강진의료원':['hospital',64.5,52.45,60,56.57],
  '목포시의료원':['hospital',55,39.05,50.27,43.1],
  '순천의료원':['hospital',41.5,77.25,37,81.3],
  '나주생활치료센터':['center',41.5,52.1,37,56.12]
}




const MapInformationRender= ({  zoom_in, name, color, setRenderInformation}) => {

  const map_info = MapInfoDict[name]
  const hospital_type = map_info[0] 
  const hospital_top = map_info[1] 
  const hospital_left = map_info[2]
  const marker_top = map_info[3] 
  const marker_left = map_info[4] 

  return (
    <>
      {hospital_type==='hospital' &&
      <HospitalRenderComponet zoom_in={zoom_in} top={hospital_top} left={hospital_left} name={name}></HospitalRenderComponet>}

      {hospital_type==='center' &&
      <CenterRenderComponet zoom_in={zoom_in} top={hospital_top} left={hospital_left} name={name}></CenterRenderComponet>}

      <MarkerRenderComponet zoom_in={zoom_in} top={marker_top} left={marker_left} color={color} setRenderInformation={setRenderInformation}  name={name}></MarkerRenderComponet>
    </>
  );
};

export default MapInformationRender;