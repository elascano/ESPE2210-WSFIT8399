const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/apartmentRoutes');

const app = express();

app.use('/wsf', routes)

const database= mongoose.connection;

const url= `mongodb+srv://cristian:cristian@cluster0.mvdkpmt.mongodb.net/shopero?retryWrites=true&w=majority`


mongoose.connect(url);

database.on('error conecting to MongoDB', (error) =>{
     console.log(error)
})

database.once('conected',()=>{
    console.log('MongoDB Database Connected');
})

app.search(express.json());
app.listen(3000, () => {
    console.log(`Server Started at $(3000)`)
})