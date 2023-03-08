const { Double, Decimal128} = require('bson');
const mongose = require('mongoose');

const apartamentsSchema = new mongoose.Schema({
    name: {
        required:  true,
        type: String
    },

    price: {
        required: true,
        type: Number
    },

    place: {
        required:  true,
        type: String
    }

})
module.exports = mongoose.model('apartaments', apartamentsSchema)
