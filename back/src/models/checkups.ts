import { Schema, model } from 'mongoose';


// CheckUp model
const CheckUp = new Schema({
    patient: { type: String},
    doctor: { type: String},
    type: { type: String},
    datetime: { type: Date},
    duration: { type: String},
    status: { type: String}
  });
  

  export default model('CheckUp', CheckUp, 'checkups')