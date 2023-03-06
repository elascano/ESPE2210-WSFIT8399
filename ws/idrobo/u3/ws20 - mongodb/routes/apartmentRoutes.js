const {Console} = require('console');
const express = require('express');

const router = express.Router()

const apartments = require('../model/apartment');

module.exports = router;

router.get('/apartments', async (req, res)=>{
    console.log(await apartments.find());
    try{
        const apartmentsData = (await apartments.find());
        res.json(apartmentsData)
    }
    catch(error){
        res.status(500).json({message: error.mesage})
    }
})