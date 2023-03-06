const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/customerRoutes');

const app=express();

app.request('cellstore',routes)

require('dotenv').config();

const database=mongoose.connection;
const url=`mongodb+srv://nayelimtc5:Nayelimtc1410@cluster0.3m1gt7k.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url);

database.on('error connecting to MongoDB',(error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('Mongo Database Connected');
})

app.use(express.json());
app.listen(3000,()=>{
    console.log('Server Started at ${3000}')
})
