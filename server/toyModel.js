const mongoose = require('mongoose')
const {Schema}=mongoose

//Create a Schema
const toySchema=new Schema({
    name:{
        type: String,
        required: true,
        default:"Mystery Toy"

    },
    category:{
        type: String,
        required: true,
        default:"Mystery category"
    },
    price:Number,
    picture:String,
    user:{type: Schema.Types.ObjectId, ref:'User'}
    
})

//Make a Model based one the Schema (Object)
const Toy = mongoose.model('Toy',toySchema)

//export the model so we can use it elsewhere
module.exports = Toy