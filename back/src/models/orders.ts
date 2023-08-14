import mongoose from "mongoose"


const Schema = mongoose.Schema

let Order = new Schema({
    id:{
        type: Number
    },
    user:{
        type: String
    },
    size:{
        type: String
    },
    status: {
        type: String
    },
    extras: [String]
})

export default mongoose.model('Orders', Order, 'orders')