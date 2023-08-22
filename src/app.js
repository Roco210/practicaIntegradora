import express from "express";
import { __dirname } from "./utils.js";
import {engine} from "express-handlebars"
import "./db/dbconfig.js"
import porductsRouter from './routes/products.routes.js'
import cartsRouter from './routes/carts.router.js'


const app = express()
const PORT = 8080
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
app.use('/api/products',porductsRouter) 
app.use('/api/carts',cartsRouter)

app.listen(PORT,()=>{
    console.log(`Escuchando puerto ${PORT}`)
})  