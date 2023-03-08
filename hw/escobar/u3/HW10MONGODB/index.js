const express = require('express');
const mongoose = require('mongoose');
const routes = require('../HW11MONGODB/routes/customerRoutes');

const app = express();

app.use('/hw', routes) //Project name

const database = mongoose.connection;
const url = `mongodb+srv://juliana:juliana@cluster0.klb45rn.mongodb.net/customer?retryWrites=true&w=majority`

mongoose.connect(url);

database.on('error connecting to MongoDB', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('MongoDB Database Connected');
});

app.use (express.json());
app.listen(3000, () => {
    console.log(`Server Started at $(3000)`)
});