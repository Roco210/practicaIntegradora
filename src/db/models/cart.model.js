import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    
    products:{
        type:Object,
        require:true,
        default:[ ]
    }
})



export const cartModel = mongoose.model("cart",cartSchema)  