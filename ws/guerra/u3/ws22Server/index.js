const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/apartamentsRoutes');

const app = express();


app.use('/apartaments', routes)

const database = mongoose.connection;
const url=  `mongodb+srv://luciana:luciana@cluster0.uxjgdcv.mongodb.net/shoperos?retryWrites=true&w=majority`

mongoose.connect(url);
database.on('error connecting to mongoDB', (error) => {
    console.log(error)

})

database.once('connected', () =>{
    console.log('mongoDB database connet')
})

app.use(express.json());
app.listen(3000, () =>{
    console.log('server stsrted add ${3000}')
})

