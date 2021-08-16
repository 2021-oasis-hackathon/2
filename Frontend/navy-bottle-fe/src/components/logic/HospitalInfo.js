import React from 'react';
import { HospitalCurrentDataDict } from '../Data/Data';

const HospitalInfo = ({ name, setData}) => {


  const hospital_info = HospitalCurrentDataDict[name];
  const serious_total = hospital_info[0];
  const serious_unuse = hospital_info[1];
  const mild_total = hospital_info[2];
  const mild_unuse = hospital_info[3];
  const man = hospital_info[4];
  const total_bed = serious_total + mild_total;
  const utilization_rate = (100*(serious_unuse + mild_unuse) / total_bed).toFixed(0);
  const utilization_rate_serious = (100*serious_unuse / serious_total).toFixed(0);
  const utilization_rate_mild = (100*mild_unuse / mild_total).toFixed(0);
  const confusion_rate = (100 * (serious_total-serious_unuse +mild_total- mild_unuse)) / man;

  setData(confusion_rate);
  
  return (<div>
  
  </div>)
};



export default HospitalInfo;
