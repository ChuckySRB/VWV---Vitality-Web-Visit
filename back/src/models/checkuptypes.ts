import { Schema, model } from 'mongoose';


// CheckUp model
const CheckUpType = new Schema({
    specialization: { type: String},
    name: { type: String},
    duration: { type: Number},
    cost: { type: Number},
    status: { type: String}
  });
  

  export default model('CheckUpType', CheckUpType, 'checkuptypes')