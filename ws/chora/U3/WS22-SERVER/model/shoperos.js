const {Double, Decimal128} = require ('bson');
const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },

    price:{
        required: true,
        type: Number

    }
});


exports = mongoose.model('furniture',furnitureSchema)