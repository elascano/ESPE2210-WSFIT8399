const express = require('express');
const mongoose = require('mongoose');
const routes =require('./routes/vinils');

const { default: mongoose } = require('mongoose');

const  app = express();


app.use('/vinils',routes)

const database= mongoose.connection;
const url = `mongodb+srv://kdtopon:deportivoquito1940@cluster0.jiktw4z.mongodb.net/Shoperos?retryWrites=true&w=majority`;

mongoose.connect(url);

database.on('error connecting to MongoDB', (error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('MongoDb Databse Conected')
})

app.use(express.json());
app.listen(3000, ()=>{
    console.log(`Server Started at ${3000}`)
})