import React from 'react';

const HospitalDict = {
  '빛고을전남대병원': [15, 7, 88, 43, 148],
  '광주보훈병원': [0, 0, 30, 13, 445],
  '조선대병원': [10, 2, 60, 67, 41],
  '광주생활치료센터': [0, 0, 110, 67, 100],
  '전북대병원': [11,1,21,10,200],
  '원광대병원': [8,0,3,2,200],
  '군산의료원':[0,0,174,174,344],
  '예수병원':[0,0,17,10,200],
  '남원의료원':[0,0,123,63,180],
  '목포시의료원':[0,0,109,67,132],
  '순천의료원':[0,0,129,87,135],
  '강진의료원':[1,0,92,31,100],
  '나주생활치료센터':[0,0,84,41,100],
  '김제생활치료센터':[0,0,110,11,100]
};

const HospitalInfo = ({ name, setData,setColor}) => {
  const hospital_info = HospitalDict[name];
  const serious_total = hospital_info[0];
  const serious_unuse = hospital_info[1];
  const mild_total = hospital_info[2];
  const mild_unuse = hospital_info[3];
  const man = hospital_info[4];
  const total_bed = serious_total + mild_total;
  const utilization_rate = (100*(serious_unuse + mild_unuse) / total_bed).toFixed(0);
  const utilization_rate_serious = (100*serious_unuse / serious_total).toFixed(0);
  const utilization_rate_mild = (100*mild_unuse / mild_total).toFixed(0);
  const confusion_rate = (100 * (serious_unuse + mild_unuse)) / man;

  setData(confusion_rate);
  
  return (<div>
  
  </div>)
};



export default HospitalInfo;
