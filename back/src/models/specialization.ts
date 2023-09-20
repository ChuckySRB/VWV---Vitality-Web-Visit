import { Schema, model } from 'mongoose';

const Specialization = new Schema({   
    name: { type: String, required: true }
})

export default model('Specialization', Specialization, 'specializations')
