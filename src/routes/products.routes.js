import { Router } from "express";
import { productMongo } from "../manager/product/productManagerMongo.js";

const router= Router()


router.get('/',async(req,res)=>{
    try{
        const products = await productMongo.getproducts()
        if(products.length){
            res.status(200).json({mesage:"products:", products})
        }else{res.status(200).json({mesage:"No product exists"})}
    }
    catch(error){res.status(500).json({error})}
})

router.get('/:id',async(req,res)=>{
    const {id}= req.params
    try{
        const prodById= await productMongo.getproductById(id)
        console.log(prodById.name)
        if (prodById.name =="CastError"){
            res.status(400).json({mesage:`No product exists whit the ID: ${id}`})
        }else{
            res.status(200).json({prodById})}
    }
    catch(error){res.status(500).json({error})}
})

router.post('/',async (req,res)=>{
    const {title, description, price, thumbnail, code, stock, category, status}=req.body
    if(!title || !description || !price || !thumbnail || !stock || !code || !category){
        res.status(400).json({mesage:'ERROR: Not all data is complete'})
    }
    try{
        const newProd = await productMongo.createProduct(req.body)
        res.status(200).json({mesage:'product created: ',newProd})
    }
    catch(error){res.status(500).json({error})}
})

router.put('/:id',async(req,res)=>{
    try{}
    catch(error){res.status(500).json({error})}
})

router.delete('/:id',async(req,res)=>{
    try{}
    catch(error){res.status(500).json({error})}
})

export default router