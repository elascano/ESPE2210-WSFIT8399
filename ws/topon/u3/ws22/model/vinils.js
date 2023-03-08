const {Double, Decimal128} = require('bson');
const mongoose = require('mongose');

const vinilsSchema = new mongoose.Schema({
    Brand:{
        required: true,
        type: String
    },

    Model: {
        required: true,
        type: String
    },

    Year:{
        required: true,
        type: Number

    }
});

module.exports = mongoose.Model('shoppers',vinilsSchema) 