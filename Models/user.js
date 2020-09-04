const mongoose = require("mongoose");
const ObjectID = require('mongoose').Types.ObjectId;

const User = mongoose.model('user',
  {
    email:{type: String, required: true},
    password:{type: String, required: true, minLength: 7},
    firstName:{type: String, require: true},
    lastName:{type: String}
});

module.exports = {User}