import { HospitalCurrentDataDict } from '../Data/Data';

const clonedeep = require('lodash.clonedeep');
const HospitalList = clonedeep(HospitalCurrentDataDict);

export const sorted = Object.keys(HospitalList).sort(function(a,b){

  const a_hospital = HospitalList[a];
  const b_hospital = HospitalList[b];
  const a_serious_unuse = a_hospital[1];
  const a_mild_unuse = a_hospital[3];
  const a_man = a_hospital[4];
  const a_confusion_rate = (100 * (a_serious_unuse + a_mild_unuse)) / a_man;

  const b_serious_unuse = b_hospital[1];
  const b_mild_unuse = b_hospital[3];
  const b_man = b_hospital[4];
  const b_confusion_rate = (100 * (b_serious_unuse + b_mild_unuse)) / b_man;
  return a_confusion_rate-b_confusion_rate
})