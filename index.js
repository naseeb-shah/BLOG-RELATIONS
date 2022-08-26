const express= require('express')
const blog= require("./model/Blogmodel")
const user=require("./model/usermodel")
const mongoose = require('mongoose')
const app=  express()
 mongoose.connect(url,(err)=>{
   console.log(err)
 })

app.get('/',(req,res)=>{
 blog.find((err,resp)=>{

    if(err)
    res.send(err)
    else
    res.send(resp)
 })

}) 

app.post('/blog',(req,res)=>{

   var sai= new blog(req.body)
   sai.save((err,data)=>{
      if(err)
      res.send(err)
      else
      res.send(data)
   })
})
app.get('/blog/:id',(req,res)=>{
    blog.fing({_id:req.params.id},(err,resp)=>{
      if(err){
         res.send(data)
      }
      else if(resp){
         res.send(resp)
      }else{
         res.send({"error":"blog not found"})
      }
    })
})

app.post('/cerateuser',(req,res)=>{
    var use=new user(req.body) 
    user.save((err,res)=>{
      if(err)
      res.send(err)
      else
      res.send({'200':"user Created scrsfully"})
    })
})
app.get('/user/login',(req,res)=>{
   user.find(req.body,(err,data)=>{
      if(err)
      res.send(err)
      else if(data)
      res.send(data)
      else
      res.send({'status':'user not found'})
   })

})

app.get('/most',(req,res)=>{

   blog.find( (er,r)=>{
      if(err)
      res.send(err)
      else
      res.send(r)
   }).sort({likes:1})
})












