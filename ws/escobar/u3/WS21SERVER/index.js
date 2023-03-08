const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/soccerTeamsRoutes');

const app = express();

app.use('/wsf', routes) //Project name

const database = mongoose.connection;
const url = `mongodb+srv://Juliana:Juliana@cluster0.qz0lf3z.mongodb.net/shoperos?retryWrites=true&w=majority`

mongoose.connect(url);

database.on('error connecting to MongoDB', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('MongoDB Database Connected');
});

app.use (express.json());
app.listen(3001, () => {
    console.log(`Server Started at $(3001)`)
});

