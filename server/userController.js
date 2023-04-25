const User=require('./userModel')
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt')

async function getAllUser(req,res){
    try{
        const user = await User.find({})
        console.log(user)
        res.status(200)
        res.send(user)
    }catch(err){
        console.log(err)
    }
}

async function findUser(req,res){
    console.log(req.params)
    const user = await User.find({category: req.params.category})
    console.log(user)
    res.status(200)
    res.send(user)
}

async function findOneUser(req,res){
    console.log(req.body)
    const user = await User.findOne(req.body)
    console.log(user)
    res.status(200)
    res.send(user)
}

async function updateUser(req,res){
    if(req.body.name!=null && req.body.password==null){
        await User.findByIdAndUpdate(req.params.id, { name:req.body.name},{new: true },function(err, user) {
            if (err) {
              console.error(err);
            } else {
              console.log(user);
            }
          });
    }
    else if(req.body.name==null && req.body.password!=null){
        await User.findByIdAndUpdate(req.params.id, {password:req.body.password},{new: true },function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
            });
    }
    else if(req.body.name!=null && req.body.password!=null){
        await User.findByIdAndUpdate(req.params.id, {name:req.body.name, password:req.body.password},{new: true },function(err, user) {
            if (err) {
                console.error(err);
            } else {
                console.log(user);
            }
            });
    }
    res.status(200)
    res.send('Update the User')
    
}

async function createUser(req,res){
    console.log(req.body)
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create new user data object
    const newUserData ={
        name: req.body.name,
        password: hashedPassword, 
    }
    console.log('Creating new user', newUserData)

    const newuser = await User.create(newUserData, function(err,newItem){
        if(err){
            console.log(err)
        } else{
            console.log(newItem,'was saved!')
        }
        })
        res.status(200)
        res.send(newuser)
}
async function deleteUser(req,res){
    await User.findByIdAndDelete(req.params.id)
    res.status(200)
    res.send('delete the Toy')
}
async function checkUser(req,res){
    if(req.body.name==null && req.body.password==null){
        await User.findByIdAndUpdate(req.params.id, { name:req.body.name},{new: true },function(err, user) {
            if (err) {
              console.error(err);
            } else {
              console.log(user);
            }
          });
    }
}
async function userLogin(req,res){
    console.log('logging in with data', req.body)
    
    //find the user
    try{
        const foundUser = await User.findOne({name: req.body.name})
        console.log('found user!',foundUser)

        const passwordMatch= await bcrypt.compare(req.body.password, foundUser.password)
        console.log('bcrypt compare match!', passwordMatch)
        if(passwordMatch){   
            res.status(200)
            res.send({
                user: foundUser,
                message: 'password match! Login'
            })
        }
        else{
            console.log("password does not match")
            res.status(403)
            res.send({
                user: foundUser, 
                message: 'password is incorrect'
            })

        }
    }catch(error){
        console.log(error)
    }
}


module.exports= {
    findUser,
    findOneUser,
    createUser,
    deleteUser,
    updateUser,
    getAllUser, 
    userLogin
}