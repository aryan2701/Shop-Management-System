// models/Bill.js
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Bill', billSchema);
