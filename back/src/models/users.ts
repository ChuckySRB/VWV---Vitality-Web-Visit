import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    firs_name: {
        type: String
    },
    last_name: {
        type: String
    },
    type: {
        type: String
    }
})

export default mongoose.model('Users', User, 'users')