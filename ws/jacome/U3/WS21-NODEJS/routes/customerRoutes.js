const{Console}=require("console");
const express =require("express");

const router = express.Router()
const park =require("../model/park");
const shoppers = require("../model/shopper");

module.exports=router;

router.get("/shoppers", async(req, res)=>{
    console.log(await shoppers.find());
    try{
        const shoppersData= await shoppers.find();
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})