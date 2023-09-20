import { Schema, model } from 'mongoose';
import CheckUpType from './checkuptypes'


// CheckUp model
const CheckUp = new Schema({
    patient: { type: String},
    doctor: { type: String},
    type: { 
      _id: {type: String},
      specialization: { type: String},
      name: { type: String},
      duration: { type: Number},
      cost: { type: Number},
      status: { type: String}},
    datetime: { type: Date},
    status: { type: String}
  });
  

  export default model('CheckUp', CheckUp, 'checkups')