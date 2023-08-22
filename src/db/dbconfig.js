import mongoose from 'mongoose'

const URI = 'mongodb+srv://rickyfernandez210:123456.@cluster0.ublusye.mongodb.net/ecomerce?retryWrites=true&w=majority'
mongoose.connect(URI)
.then(()=>console.log('conectado a la base de datos'))
.catch((error)=>console.log(error))


