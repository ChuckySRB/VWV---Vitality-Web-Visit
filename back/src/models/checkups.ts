import { Schema, model } from 'mongoose';
import CheckUpType from './checkuptypes'


// CheckUp model
const CheckUp = new Schema({
    patient: { type: String},
    doctor: { type: String},
    type: { type: CheckUpType},
    datetime: { type: Date},
    status: { type: String}
  });
  

  export default model('CheckUp', CheckUp, 'checkups')