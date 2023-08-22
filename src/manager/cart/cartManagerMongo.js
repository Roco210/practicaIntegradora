import { cartModel } from "../../db/models/cart.model.js";
import { productMongo } from "../product/productManagerMongo.js";
class CartMongo {
    async getCarts(obj){
        try{
            const carts =await cartModel.create(obj)
            return carts
        }
        catch(error){return error}
    }
    
    async getcartById(id){
        try{
            const cart =await cartModel.findById(id)
            return cart
        }
        catch(error){return error}
    }
    async deletecart(id){
        try{
            const cart =cartModel.findByIdAndDelete(id)
            return cart
        }
        catch(error){return error}
    }
    async updatecart(cid,pid){
        const cart = await cartModel.findById(cid)
        return cart
        /* try{
            const cart = cartModel.findOneAndUpdate({_products:pid})
        }
            
        catch(error){return error} */
    }
}

export const cartMongo =new CartMongo()