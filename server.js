// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/items');
const billRoutes = require('./routes/bills');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect("YOURS_CONNECTION_STRING")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use('/api', itemRoutes);
app.use('/api', billRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
