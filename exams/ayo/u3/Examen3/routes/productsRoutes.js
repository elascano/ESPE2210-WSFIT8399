const { console } = require('console');
const express = require('express');

const router = express.Router()
const cellphonestore = require('../model/products')

module.exports = router;

router.get('/starwars', async (req, res) => {
    console.log(await cellphonestore.find());
    try{
        const products = await products.find();
        res.json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});