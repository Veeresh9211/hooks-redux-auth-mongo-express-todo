require('./mongoDB.js');
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const laptopsControllerRoutes = require('./Controllers/laptopsController');
app.use(bodyParser.json());
app.use(cors())
app.use('/laptops', laptopsControllerRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('react-client/build'));
  }
  

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`);
});
