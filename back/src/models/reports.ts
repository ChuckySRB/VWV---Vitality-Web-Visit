import { Schema, model } from 'mongoose';
import CheckUp from './checkups'


// CheckUp model
const Report = new Schema({
    checkup: { type: CheckUp},
    reason_for_comming: {type: String},
    diagnose: {type: String},
    terrapy: {type: String},
    next_checkup: {type: Date}
  });
  

  export default model('Report', Report, 'reports')