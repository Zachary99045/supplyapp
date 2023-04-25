//Imports
const express =require('express')
const bodyParser = require('body-parser')
const userController=require("./userController")
//Setup
const router = express.Router()
const jsonParser=bodyParser.json()

router
    .route('/user')
    .post(jsonParser,userController.createUser)

router
    .route('/getOneUser')
    .post(jsonParser,userController.findOneUser)
    .get(jsonParser,userController.findOneUser)

router
    .route('/deletebyUserid/:id')
    .delete(userController.deleteUser)

router
    .route('/updateUser/:id')
    .post(jsonParser,userController.updateUser)

router
    .route('/getAllUser')
    .get(userController.getAllUser)

router 
    .route('/login')
    .post(jsonParser,userController.userLogin)
module.exports = router