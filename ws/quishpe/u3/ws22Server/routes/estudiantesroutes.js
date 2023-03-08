const {Console} = require('console');
const express = require('express');
const router = express.Router()
//const { channel } = require('diagnostics_channel');
const students = require('../model/students');

module.exports=router;

router.get('/students', async (req, res)=>{
    console.log(await shoperos.find());
    try{
        const shoppersData = await students.find();
        res.json(shoppersData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})