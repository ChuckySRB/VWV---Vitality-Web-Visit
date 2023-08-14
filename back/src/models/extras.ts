import mongoose from "mongoose"

const Schema = mongoose.Schema

let Extras = new Schema({
    id: Number,
    name: String,
    amount: Number
    
})

export default mongoose.model('Extras', Extras, 'extras')