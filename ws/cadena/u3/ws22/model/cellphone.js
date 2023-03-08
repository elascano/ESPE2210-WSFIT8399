const {Double, Decimal128} = require('bson');
const mongoose = require('mongose');

const CellphoneSchema = new mongoose.Schema({
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

module.exports = mongoose.Model('shoppers',CellphoneSchema) //Para la consulta de la base no es URL