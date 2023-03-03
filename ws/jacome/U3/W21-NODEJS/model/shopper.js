const {Double, Decimal128}=require("bson");
const mongoose=require("mongoose");

const shopperSchema= new mongoose.shopperSchema({
    administrator:{
        required: true,
        type: String
    },
    park:{
        required:true,
        type: String
    },
    
    phone:{
        required:true,
        type: Number
    }
    


})

module.exports=mongoose.model("shoppers",shopperSchema);