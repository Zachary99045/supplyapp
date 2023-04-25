const express=require('express');
const cors = require('cors');
const mongoose= require('mongoose')
const cloudinary = require('cloudinary').v2;
const server =express();

//importRouter
const toyRouter=require('./toyRoutes')
const userRouter=require('./userRoutes')

cloudinary.config({
    cloud_name: "drk7oqccn",
    api_key: "463654231128345",
    api_secret: "j2g72OGpa4jhzLBiq2RriOGi_LU"
});


try{
    mongoose.connect("mongodb+srv://Zachary:Zachary99045@cluster0.914eeku.mongodb.net/?retryWrites=true&w=majority");
    console.log("connected")
}catch(error){
    console.log(error)
}



server.use(cors())
//Router
server.use('/', toyRouter)
server.use('/', userRouter)
const port=3000
server.listen(port, ()=>{
    console.log(`Server live on port ${port}`)
})
