const expression = require ('express');
const mongoose = require('mongoose');
const routes = require('../ws22Server/routes/estudiantesroutes')

const app = express;

app.use('/students', routes)

const database = mongoose.connection
const url=`mongodb+srv://anthony11:anthony11@cluster0.6o2zl2h.mongodb.net/shoperos?retryWrites=true&w=majority`

mongoose.connect(url)

database.on('error connetion to MongoDB', (error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('MongoDB Databse Connected');
})

app.use(express.json());
app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})