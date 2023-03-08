const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourLastNameCustomers', { useNewUrlParser: true, useUnifiedTopology: true });

const dataSchema = new mongoose.Schema({
  id: Number,
   name: String,
  age: Number,
  money: Number
  
});

const Data = mongoose.model('Data', dataSchema);

app.get('/data', async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
