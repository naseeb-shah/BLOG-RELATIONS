const mongoose = require('mongoose')


var blog= mongoose.Schema

var blogshemma=new blog({
content:String,
comments:[String]
,
likes:Number,
author:String

})
