const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/furnitureRoutes');


const app = express();

app.use('/furniture', routes)

const database = mongoose.connection;
const url = `mongodb+srv://Liliana:liliana@cluster0.vabyrar.mongodb.net/shoperos?retryWrites=true&w=majority`

mongoose.connect(url);
database.on('error connectiong to MongoDB', (error)=>{
    console.log(error)
})
database.once('connected', () =>{
    console.log('MongoDB Database Connected');
})

app.use(express.json());
app.listen(3000, ()=>{
    console.log(`Server Started at ${3002}`)
})