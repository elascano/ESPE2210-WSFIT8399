const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/customerRoutes');
const bp= require('body-parser');

const app = express();

app.use('cellstore', routes)

const database = mongoose.connection;
const url = `mongodb+srv://elian:<password>@cluster0.9pw1oad.mongodb.net/shoperos?retryWrites=true&w=majority`

database.on('error connecting to MongoDB', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('MongoDB Database Connected');
})

app.use(express.json());
app.listen(3000, () => {
    console.log('server Started at ${3000}')
})