const { AssertionError } = require('assert');
const{Console}=require('console');
const express = require('express');

const router = express.Router()

const customers=requiere('../model/customer');
const shoppers=require('../model/shopper');

module.exports=router;

router.get('/shoppers',async(reg,res)=>{
    console.log(await shoppers.find());
    try{
        const shoppersData=await shoppers.find();
        res.json(shoppersData)
    }
    catch(error){
        res.status(500).json({message:AssertionError,message})
    }
});