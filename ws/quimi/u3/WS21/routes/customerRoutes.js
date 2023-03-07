const {Console} = require('console');
const express = require('express');

const router = express.router()

const shoperos = require('../model/shoperos');
const bank = require('../model/customer');

module.exports = router;

router.get('/shopper', async (req, res) =>{
    console.log(await shoppers.find());
    try{
        const shoppersData = await
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});


