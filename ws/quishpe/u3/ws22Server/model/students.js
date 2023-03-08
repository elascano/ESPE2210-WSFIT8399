const mongoose = require ('mongose');

const shoperSchema = new mongoose.Schema({
    id :{
        required : true,
        type: Number
    },
    name :{
        requiered: true,
        type: String
    },
    age: {
        requiered: true,
        type: Number
    },
    subject:{
        requiered : true,
        type: String
    }
});

module.exports = mongoose.model('students', shoperSchema)