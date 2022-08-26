//  const { default: mongoose } = require('mongoose')
const mongoose= require('mongoose')

  var user= mongoose.Schema

  var usershema=new user({
    username:String,
    useremail:String,
    blogs:[String]
  })
   var usermodel= mongoose.model("user",usershema)
   module.exports=usermodel