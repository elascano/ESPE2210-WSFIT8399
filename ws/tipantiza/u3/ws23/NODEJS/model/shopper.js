const {Double, Decimal128}=require('bson');
const mongoose = requiere = ('mongose');

const shopperSchema=new mongoose.Schema({
    id: {
        required:true,
        type:Number
    },
    name: {
        required: true,
        type: String
    },
    spentMoney: {
        required: true,
        type: Decimal128
    }
})

module.exports=mongoose.model('shoppers',shopperSchema)