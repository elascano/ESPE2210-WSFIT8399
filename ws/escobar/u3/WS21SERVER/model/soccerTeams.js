const { Double, Decimal128 } = require('bson');
const mongoose = require('mongoose');


const soccerTeamsSchema = new mongoose.Schema({

    team:{
        required: true,
        type: String
    },

    player:{
        required: true,
        type: String
    },

    totalPlayers:{
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('soccerTeams',soccerTeamsSchema);