const {Console} = require('console');
const express = require('express');

const router = express.Router()
const soccerTeams = require('../model/soccerTeams');

module.exports = router;

router.get('/soccerTeams', async(req, res) =>{
    console.log(await soccerTeams.find());
    try{
        const soccerTeamsData = (await soccerTeams.find());
        res.json(soccerTeamsData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});