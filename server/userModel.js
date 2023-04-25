const mongoose = require('mongoose')
const {Schema}=mongoose

//Create a Schema
const userSchema=new Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
})
const User=mongoose.model('User',userSchema)
//export the model so we can use it elsewhere
module.exports = User