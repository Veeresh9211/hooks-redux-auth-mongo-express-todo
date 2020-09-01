const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;

const Laptops = mongoose.model('laptop',
  {
    brand: {type: String},
    processor: {type: String},    
    processorGeneration: {type: String},
    screenSize: {type: String},
    operatingSystem: {type: String},
    graphicsCard: {type: String},    
    hardDisk: {type: String},    
    ram: {type: String},    
    storageType: {type: String}, 
    price: {type:Number},
    processorBrand: {type: String},
    touchScreen: {type: String}
    
});

module.exports = {Laptops}