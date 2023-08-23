import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({

user:{
    type:String,
    require:true,
    unique:true
},
message:{
    type:String
}
})

export const messagesModel =mongoose.model('messages',messagesSchema)