const { Double, Decimal128 } = require('bson');
const mongoose = require('mongoose');

const cellphonestoreSchema = new mongoose.Schema({

id: {
    required: true,
    type: Number
},

brand: {
    required: true,
    type: String
},

model: {
    required: true,
    type: String
},

price: {
    required: true,
    type: Number
}

});

module.exports = mongoose.model('cellphonestore',cellphonestoreSchema)