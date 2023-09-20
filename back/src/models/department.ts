import { Schema, model } from 'mongoose';


// Depetartment model
const Department = new Schema({   
    name: { type: String, required: true }
})


export default model('Department', Department, 'departments')
   