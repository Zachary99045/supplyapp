const mongoose = require('mongoose')
const {Schema}=mongoose

//Create a Schema
const toySchema=new Schema({
    name:{
        type: String,
        required: true,

    },
    category:{
        type: String,
        required: true,
    },
    price:Number,
    picture:String,
})

//Make a Model based one the Schema (Object)
const Toy = mongoose.model('Toy',toySchema)

//export the model so we can use it elsewhere
module.exports = Toy