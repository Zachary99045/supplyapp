const Toy=require('./toyModel')
const cloudinary = require('cloudinary').v2;


async function getAllToy(req,res){
    try{
        const toys = await Toy.find({})
        console.log(toys)
        res.status(200)
        res.send(toys)
    }catch(err){
        console.log(err)
    }
    
}

async function findtoy(req,res){
    console.log(req.params)
    const toys = await Toy.find({category: req.params.category})
    console.log(toys)
    res.status(200)
    res.send(toys)
}

async function findOneToy(req,res){
    console.log(req.body)
    const toys = await Toy.findOne(req.body)
    console.log(toys)
    res.status(200)
    res.send(toys)
}

async function updateToy(req,res){
    if(req.body.name!=null && req.body.category==null && req.body.price==null){
        await Toy.findByIdAndUpdate(req.params.id, { name:req.body.name},{new: true },function(err, toy) {
            if (err) {
              console.error(err);
            } else {
              console.log(toy);
            }
          });
    }
    else if(req.body.name!=null && req.body.category!=null && req.body.price==null){
        await Toy.findByIdAndUpdate(req.params.id, {name:req.body.name, category:req.body.category},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    else if(req.body.name!=null && req.body.category!=null && req.body.price!=null){
        await Toy.findByIdAndUpdate(req.params.id, {name:req.body.name, category:req.body.category, price:req.body.price},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    else if(req.body.name==null && req.body.category!=null && req.body.price==null){
        await Toy.findByIdAndUpdate(req.params.id, {category:req.body.category},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    else if(req.body.name==null && req.body.category!=null && req.body.price!=null){
        await Toy.findByIdAndUpdate(req.params.id, {category:req.body.category, price:req.body.price},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    else if(req.body.name==null && req.body.category==null && req.body.price!=null){
        await Toy.findByIdAndUpdate(req.params.id, {price:req.body.price},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    else if(req.body.name!=null && req.body.category==null && req.body.price!=null){
        await Toy.findByIdAndUpdate(req.params.id, {name:req.body.name, price:req.body.price},{new: true },function(err, toy) {
            if (err) {
                console.error(err);
            } else {
                console.log(toy);
            }
            });
    }
    res.status(200)
    res.send('Update the Toy')
    
}

async function createToy(req,res){
    console.log(req.body)
    const toyReq=req.body
    const resimg = cloudinary.uploader.upload(req.body.picture, {public_id: req.body.name})
    console.log(resimg);

    const newtoys = await Toy.create(toyReq, function(err,newItem){
        if(err){
            console.log(err)
        } else{
            console.log(newItem,'was saved!')
        }
        })
        res.status(200)
        res.send(newtoys)
}
async function deleteToy(req,res){
    await Toy.findByIdAndDelete(req.params.id)
    res.status(200)
    res.send('delete the Toy')
}

module.exports= {
    findtoy,
    findOneToy,
    createToy,
    deleteToy,
    updateToy,
    getAllToy
}