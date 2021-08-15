import React from 'react';

const HospitalDict = {
  '빛고을전남대병원': [15, 7, 88, 43, 148],
  '광주보훈병원': [0, 0, 30, 13, 445],
  '조선대병원': [10, 2, 60, 67, 21],
  '광주 생활치료센터': [0, 0, 110, 67, 0],
  '전북대병원': [11,1,21,10,200],
  '원광대병원': [8,0,3,2,200],
  '군산의료원':[0,0,174,174,344],
  '예수병원':[0,0,17,10,200],
  '남원의료원':[0,0,123,63,180],
  '목포시의료원':[0,0,109,67,132],
  '순천의료원':[0,0,129,87,135],
  '강진의료원':[0,0,92,31]
};

const HospitalInfo = ({ name, setData,setColor}) => {
  const hospital_info = HospitalDict[name];
  const serious_total = hospital_info[0];
  const serious_unuse = hospital_info[1];
  const mild_total = hospital_info[2];
  const mild_unuse = hospital_info[3];
  const man = hospital_info[4];
  const total_bed = serious_total + mild_total;
  const utilization_rate = (serious_unuse + mild_unuse) / total_bed;
  const utilization_rate_serious = serious_unuse / serious_total;
  const utilization_rate_mild = mild_unuse / mild_total;
  const confusion_rate = (100 * (serious_unuse + mild_unuse)) / man;
  const confusion_rate_color = ({ confusion_rate }) => {
    if (confusion_rate > 66) {
      return '#FF7B7B';
    } else if (confusion_rate > 33) {
      return '#FFC77D';
    } else {
      return '#7CDFAE';
    }
  };
  
  setData(confusion_rate);
  setColor(confusion_rate_color(confusion_rate));
  
  return (<div>
  
  </div>)
};



export default HospitalInfo;
