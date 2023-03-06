const {Double, Decimal128} = require ('bson');
const mongoose = require('mongoose');

const keyboardSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },

    type: {
        required: true,
        type: String
    },

    precio:{
        required: true,
        type: float

    }
});

module.exports = mongoose.model('shoppers',keyboardSchema)