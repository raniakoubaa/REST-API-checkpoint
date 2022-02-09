const express=require('express');
const { param } = require('express/lib/request');
const app=express();
require('dotenv').config({path:"./config/.env"});
const connectDB=require("./config/connectDB");
connectDB()
const User=require('./model/User')
app.use(express.json())
// CRUD
//POST :  ADD A NEW USER TO THE DATABASE 
app.post("/user/add",async(req,res)=>{
const{name,email,phone}=req.body;
const newUser=new User({name,email,phone})
try {
    await newUser.save();
    res.send(newUser)
} catch (error) {
    res.send(error.message);
}
})
// GET :  RETURN ALL USERS 

app.get("/users/get",async(req,res)=>{
    try {
        const users=await User.find();
        res.send(users)
    } catch (error) {
        res.send(error.message);
    }
    })
    // GET :  RETURN ONE USER 
    app.get("/user/get/:id",async(req,res)=>{
        try {
            const oneuser=await User.findById(req.params.id);
            res.send(oneuser)
        } catch (error) {
            res.send(error.message);
        }
        })
        //    DELETE : REMOVE A USER BY ID 
         
    app.delete("/user/delete/:id",async(req,res)=>{
        try {
            const oneuser=await User.findByIdAndDelete(req.params.id);
            res.send("success")
        } catch (error) {
            res.send(error.message);
        }
        })
        // PUT : EDIT A USER BY ID 
         
    app.put("/user/update/:id",async(req,res)=>{
        try {
            const oneuser=await User.findByIdAndUpdate(req.params.id,{...req.body});
            res.send(oneuser)
        } catch (error) {
            res.send(error.message);
        }
        })
const port=process.env.port|| 5000;
app.listen(port,err=>err?console.log(err):console.log(`server is running in prot ${port}`))