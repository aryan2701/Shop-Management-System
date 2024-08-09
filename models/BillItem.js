// models/BillItem.js
const mongoose = require('mongoose');

const billItemSchema = new mongoose.Schema({
  bill_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('BillItem', billItemSchema);
