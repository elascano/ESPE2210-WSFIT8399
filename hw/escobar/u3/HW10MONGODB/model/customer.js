const {Double, Decimal128} = require ('bson');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id:{
        require:true,
        type: Number
    },

    name:{
        require:true,
        type: String
    },

    lastName:{
        require:true,
        type: String
    },

    age:{
        require:true,
        type: Number
    },

    address:{
        require:true,
        type: String
    }
});

module.exports = mongoose.model('customer',customerSchema);
