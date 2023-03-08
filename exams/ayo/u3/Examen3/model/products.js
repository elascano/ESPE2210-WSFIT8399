const { Double, Decimal128 } = require('bson');
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({

id: {
    required: true,
    type: Number
},

age: {
    required: true,
    type: Number
},

products: {
    required: true,
    type: String
},

price: {
    required: true,
    type: Number
}

});

module.exports = mongoose.model('products',productsSchema)