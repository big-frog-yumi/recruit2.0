var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  account:{
    type:String,
    required: true
  },
  password:{
    type: Number,
    required:true
  }
})

module.exports = Admin = mongoose.model("admin", AdminSchema);