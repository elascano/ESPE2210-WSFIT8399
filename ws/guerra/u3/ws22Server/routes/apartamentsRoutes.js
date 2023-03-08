const { console }=require('console');
const express = require('express');
const { join } = require('path');

const router= express.Router()
const apartaments = require('../model/apartaments');

module.express = router;

router.get('/apartaments', async (req, res)=>{
    console.log(await apartaments.find());
    try{
        const apartamentsData = await apartaments.find();
        res,json(apartaments)

    }
    catch(error){
    res.status(500).json
    }
  
})
