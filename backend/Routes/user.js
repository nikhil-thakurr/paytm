const express = require("express");
const User = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../config")
const userRouter = express.Router();

const schema = zod.schema({
    email:zod.string().email(),
    firstName :zod.string(),
    lastName : zod.string(),
    password:zod.string()
})


userRouter.post("/signup",async (req,res)=>{
    const {firstName ,lastName ,email,password}=req.body ;

    const safeSchema = schema.safeParse(req.body);
    if(!safeSchema.success){
        return res.status(411).json({
            message:"Invalid inputs"
        })
    }

    const existingUser =await user.findByOne({email:req.body.email});
    if(existingUser){

        return res.status(411).json({
            message:"Email Alreayd exists"
        })
        
    }

    const user =new User ({
        firstName,lastName,email,password
    })

    const savedUser = await user.save();

    const token =jwt.sign({
        UserId:savedUser._id

    },JWT_SECRET)

    res.json({
        message:"User Created successfully",
        token:token 
    })


    
})

module.exports = userRouter