const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/cellphoneRoutes');



const app = express();


app.use('/cellphonestore', routes)

//const user = process.env.USER;
//const password = process.env.PASSWORD;

const database = mongoose.connection;
const url = `mongodb+srv://dcayo:mongo61076@cluster0.x1ux8zr.mongodb.net/shoperos?retryWrites=true&w=majority`

mongoose.connect(url);

database.on('error connecting to MongoDB', (error)=> {
    console.log(error)
})

database.once('connected', () => {
    console.log('MongoDB Database Connected');
})

app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})