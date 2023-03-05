const{ Console } = require('console');
const express = require('express');

const router = express.Router()

//const customers = require('../model/shopper')
const shopers = require('../model/shopper')

module.exports = router;

router.get('/shoppers', async (req, res)=>{
    console.log(await shopers.find());
    try{
        const shopersData = await shopers.find();
        res.json(shopersData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})