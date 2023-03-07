const {Double, Decima128} = require('bason');
const mongose = require('mongoose');

const bankSchema = new mongoose.Schema(
    {
    name:{
        required: true,
        type: String
    },

    age:{
        required: true,
        type: Number
    },

    credit:{
        required: true,
        type: Number
    },

    card:{
        required: true,
        type: Number
    },
});

module.export = mongose.model('shoperos', shoperosSchema)