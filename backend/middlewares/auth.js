const express = require("express");
const zod = require("zod");
const { JWT_SECRET } = require("../config");

const authMiddleware =(req,res,next)=>{

    const authHeader = req.headers.authorization ;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        res.status(403).json({
            message:"Invalid or Empty token"
        })
    }

    const token =authHeader.split(' ')[1];

    const authToken = jwt.verify(token,JWT_SECRET);

    if(authToken.UserId){
        req.UserId = authToken.UserId;
    }
    
}

module.exports = {authMiddleware}