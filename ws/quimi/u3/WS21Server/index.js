const express = require('express');
const mongose = require('mongose');
const router = require('./routes/customerRoutes');

const app = express()

app.use('/bank', routes)

const database = mongoose.connection;
const url = `mongodb+srv://lizeth:Lizeth@cluster0.fngfcfb.mongodb.net/?retryWrites=true&w=majority`

mongose.connect(url);

database.on('error connecting to MongoDB', (error) => {
    console.log(error);
})

datebase.once('connected', () =>{
    console.log('MongoDB Database Connected' );
})

app.use(express.json());
app.listen(3000, () => {
    console.log('Server Started at ${3000}')
})