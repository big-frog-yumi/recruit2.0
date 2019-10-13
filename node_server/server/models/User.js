var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  stunum: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
  },
  direct: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  }
})

module.exports = User = mongoose.model("users",UserSchema)