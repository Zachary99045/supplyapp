//Imports
const express =require('express')
const bodyParser = require('body-parser')
const toyController=require("./toyController")
//Setup
const router = express.Router()
const jsonParser=bodyParser.json()

router
    .route('/toy')
    .post(jsonParser,toyController.createToy)

router
    .route('/getOneToy')
    .post(jsonParser,toyController.findOneToy)
    .get(jsonParser,toyController.findOneToy)

router
    .route('/getAllToy/:category')
    .get(toyController.findtoy)

router
    .route('/deletebyid/:id')
    .delete(toyController.deleteToy)

router
    .route('/updateToy/:id')
    .post(jsonParser,toyController.updateToy)

router
    .route('/getAllToy')
    .get(toyController.getAllToy)

module.exports = router