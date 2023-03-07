const { console } = require('console');
const express = require('express');

const router = express.Router()
const cellphonestore = require('../model/cellphonestore')

module.exports = router;

router.get('/shoperos', async (req, res) => {
    console.log(await cellphonestore.find());
    try{
        const cellphonestore = await cellphonestore.find();
        res.json(cellphonestore)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});