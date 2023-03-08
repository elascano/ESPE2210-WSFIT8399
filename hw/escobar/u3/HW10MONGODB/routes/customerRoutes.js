const {Console} = require('console');
const express = require('express');

const router = express.Router();
const customer = require('../model/customer');

module.exports = router;

router.get('/customer', async(req, res) => {
    console.log(await customer.find());
    try{
        const customerData = (await customer.find());
        res.json(customerData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});