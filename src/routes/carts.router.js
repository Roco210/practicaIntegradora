import { Router } from "express";
import { cartMongo } from "../manager/cart/cartManagerMongo.js";
import { productMongo } from "../manager/product/productManagerMongo.js";
const router= Router()

router.post("/",async (req,res)=>{

    try{
        await cartMongo.getCarts()
        res.status(200).json({mesage:'Cart created'})}
        catch(error){res.status(500).json({error})}
    }
)

router.get("/:cid",async(req, res)=>{
    let {cid} = req.params
    try{
        const cart= await cartMongo.getcartById(cid)
        if (!cart){
            res.status(400).json({mesage:"No cart whit the ID "})
        }else{
            res.status(200).send(cart.products)
        }
    }
    catch(error){res.status(500).json({error})}
})

router.post("/:cid/product/:pid",async (req,res)=>{
    let cid= req.params.cid
    let pid= req.params.pid
})


export default router