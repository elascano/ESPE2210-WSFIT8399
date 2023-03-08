const express = require("express");
const mongoose= require("mongoose");
const router=require("./routes/customerRoutes");

const app = express();

app.use("/park",routes)

const database = mongoose.connection;
const url=`mongodb+srv://ivonne:ivonne@cluster0.dpwgh2z.mongodb.net/shoperos?retryWrites=true&w=majority`
mongoose.connect (url);

database.on("eror coneccting to mongodb",(error)=>{
    console.log(error)
})
database.once("connnected",()=>{
    console.log()
})
app.use(express.json());
app.listen(3000,()=>{
    console.log(`server started at ${3000}`)
})