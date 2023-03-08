const{ Double, Decimal128} = require('bson');
const mongoose = require('mongoose');

const apartmentsSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    location:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('apartments', apartmentsSchema)