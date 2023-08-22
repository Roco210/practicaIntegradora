import { Router } from "express";
import { productMongo } from "../manager/product/productManagerMongo.js";

const router= Router()

router.get('/',async(req,res)=>{
    try{
        const products = await productMongo.getproducts()
        if(products.length){
            res.status(200).json({mesage:"products:", products})
        }else{res.status(500).json({mesage:"No product exists"})}
    }
    catch(error){res.status(500).json({error})}
})

router.get('/:pid',async(req,res)=>{
    const {pid}= req.params
    if (pid.length != 24){
        res.status(400).json({mesage:`Use a correct Id`})
        return}
    try{
        const prodById= await productMongo.getproductById(pid)
        if (!prodById){
            res.status(400).json({mesage:`No product exists whit the ID: ${pid}`}) //el object id lleva 24 caracteres o 12 si es menor da error 
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

router.put('/:pid',async(req,res)=>{
    const pid= req.params.pid
    const prod = req.body
    if (pid.length != 24){
        res.status(400).json({mesage:`Use a correct Id`})
        return}
    const prodById= await productMongo.getproductById(pid)
    if (!prodById){
        res.status(500).json({mesage:"No product exists"})
        return}
    try{
        const mod= await productMongo.updateProduct(pid,prod)
        if (!mod){
            res.status(400).json({mesage:`No product exists whit the ID: ${pid}`})
        }else{
            res.status(200).json({mesage:"product modify"})}
    }
    catch(error){res.status(500).json({error})}
})

router.delete('/:pid',async(req,res)=>{
    const pid = req.params.pid
    if (pid.length != 24){
        res.status(400).json({mesage:`Use a correct Id`})
        return}
    try{
        const del = await productMongo.deleteProduct(pid)
        if (!del){
            res.status(400).json({mesage:"the id no exists"})
        }else {res.status(200).json({mesage:"the product was delete"})
    }}
    catch(error){res.status(500).json({error})}
})

export default router