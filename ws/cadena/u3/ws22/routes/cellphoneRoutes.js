const {Console} = require('console');
const express=require('express');

const router=express.Router()
const cellphone = require('../model/cellphone');

module.exports = router;

Router.get('/shoppers', async (req,res)=>{
    console.log(await shoppers.find());
    try {
        const shoppersData= await shoppers.find();
        res.json(shoppersData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

