const { Console } = require ('console');
const express = require('express');

const router = express.Router()
const shopper = require ('../model/shoperos')


module.exports = router;


router.get('/shoperos', async (req, res) =>{
    console.log(await shoperos.find())
    try{
        const furnitureData = await shoperos.find();
        res.json(furnitureData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
} )

