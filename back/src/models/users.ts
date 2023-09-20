import { Schema, model } from 'mongoose';
import CheckUpType from './checkuptypes'

// User model
const User = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String},
    name: { type: String},
    surname: { type: String},
    doctor_info: {
        license: { type: String},
        specialization: { type: String},
        department: { type: String},
        checkups: [{ 
            _id: {type: String},
            specialization: { type: String},
            name: { type: String},
            duration: { type: Number},
            cost: { type: Number},
            status: { type: String}}]
    },
    image: { type: String },
    status: { type: String }
});


export default model('User', User, 'users')
