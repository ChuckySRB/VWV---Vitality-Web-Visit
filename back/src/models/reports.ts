import { Schema, model } from 'mongoose';
import CheckUp from './checkups'


// CheckUp model
const Report = new Schema({
    checkup: {patient: { type: String},
      doctor: { type: String},
      type: { 
        _id: {type: String},
        specialization: { type: String},
        name: { type: String},
        duration: { type: Number},
        cost: { type: Number},
        status: { type: String}},
      datetime: { type: Date},
      status: { type: String} },
    reason_for_comming: {type: String},
    diagnose: {type: String},
    terrapy: {type: String},
    next_checkup: {type: Date}
  });
  

  export default model('Report', Report, 'reports')