const mongoose = require('mongoose')
const uri = "mongodb+srv://veeresh:ramappa@cluster0.ruak1.mongodb.net/laptops_shop?retryWrites=true&w=majority";

mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true },function(err, client) {
  console.log("Connected successfully to server");

  if (err) return console.error(err)
    console.log('Connected to Database')
  // console.log(client + err);
});


