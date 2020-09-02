require('./mongoDB.js');
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
let {Laptops} = require('./Models/laptop');

const laptopsControllerRoutes = require('./Controllers/laptopsController');
app.use(bodyParser.json());
app.use(cors())
app.use('/laptops', laptopsControllerRoutes);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header('Access-Control-Allow-Credentials', true);
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('react-client/build'));
  }
  
  

var server = app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`);
});

var io = require('socket.io').listen(server);

io.on('connection', socket => {
  console.log('Connected!!')
  socket.on('updatedLaptop', () => {
    console.log('Connected2!!')
    Laptops.find((err,docs)=>{
      console.log("inside")
        if(!err) {
          console.log("insde2")
          socket.emit('updatedLaptopLists',docs);
        }
    })
  })
  // Laptops.find((err,docs)=>{
  //   console.log("inside")
  //     if(!err) {
  //       console.log("insde2")
  //         socket.emit('updatedLaptopList',docs);
  //     }
  // })
})