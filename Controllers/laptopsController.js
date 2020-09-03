const express = require('express');
const routes = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
// const auth = require('../Middleware/auth');

let {Laptops} = require('../Models/laptop');

routes.get('/:id', (req, res) => {
    Laptops.find({ "_id": req.params.id },(err,docs)=>{
        if(!err) res.send(docs);
    });
})

routes.get('/', (req, res) => {
    Laptops.find((err,docs)=>{
        if(!err) res.send(docs);
    })
});


routes.post('/', async (req, res) => {
    console.log(req.body)
    let newLaptop =new Laptops({
        brand: req.body.brand,
        processor: req.body.processor,    
        processorGeneration: req.body.processorGeneration,
        screenSize: req.body.screenSize,
        operatingSystem: req.body.operatingSystem,
        graphicsCard: req.body.graphicsCard,    
        hardDisk: req.body.hardDisk,    
        ram: req.body.ram,    
        storageType: req.body.storageType, 
        price: req.body.price,
        processorBrand: req.body.processorBrand,
        touchScreen: req.body.touchScreen
    })
    newLaptop.save((err,docs)=>{
        if (err) return res.status(500).send('Error Saving Laptop Configurations!!!');
        if(!err) return res.send(docs);
    })
})


routes.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with id: ${req.params.id}`)
    }
    var updateRecord ={
        brand: req.body.brand,
        processor: req.body.processor,    
        processorGeneration: req.body.processorGeneration,
        screenSize: req.body.screenSize,
        operatingSystem: req.body.operatingSystem,
        graphicsCard: req.body.graphicsCard,    
        hardDisk: req.body.hardDisk,    
        ram: req.body.ram,    
        storageType: req.body.storageType, 
        price: req.body.price,
        processorBrand: req.body.processorBrand,
        touchScreen: req.body.touchScreen
    }

    Laptops.findByIdAndUpdate(req.params.id,{$set:updateRecord},(err,docs)=>{
        if (err) return res.status(500).send('Error Updating Latptop Configurations');
        if(!err) return res.send(docs);
    })
})

routes.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with id: ${req.params.id}`)
    }
    Laptops.findByIdAndRemove(req.params.id,(err,docs)=>{
        if (err) return res.status(500).send('Error Deleting Latptop Configurations');
        if(!err) return res.send(docs);
    })
})
routes.post('/filters',(req,res)=>{
   const { brand, processor, ram, processorBrand, storageType } = req.body;
    let keys = Object.keys(req.body)
    let cond0 = keys[0] !== undefined ? `$in` : `$ne`
    let cond1 = keys[1] !== undefined ? `$in` : `$ne`
    let cond2 = keys[2] !== undefined ? `$in` : `$ne`
    let cond3 = keys[3] !== undefined ? `$in` : `$ne`

    let body1 = keys[0] !== undefined ? req.body[keys[0]] : ``
    let body2 = keys[1] !== undefined ? req.body[keys[1]] : ``
    let body3 = keys[2] !== undefined ? req.body[keys[2]] : ``
    let body4 = keys[3] !== undefined ? req.body[keys[3]] : ``
  
    Laptops.find({
        [keys[0]]: { [cond0]: body1 },
        [keys[1]]: { [cond1]: body2 },
        [keys[2]]: { [cond2]: body3 },
        [keys[3]]: { [cond3]: body4 },
    },(err,docs)=>{
        if (err) return res.status(500).send('Error Deleting Latptop Configurations');
        if(!err) return res.send(docs);
    });   
})

module.exports = routes;