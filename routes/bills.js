// routes/bills.js
const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');
const BillItem = require('../models/BillItem');
const Item = require('../models/Item');

// Create a new bill
router.post('/bills', async (req, res) => {
  const bill = new Bill();
  let total = 0;

  try {
    const billItems = req.body.items;
    for (const billItem of billItems) {
      const item = await Item.findById(billItem.item_id);
      if (item.quantity < billItem.quantity) {
        return res.status(400).send({ error: 'Insufficient quantity for item: ' + item.name });
      }
      item.quantity -= billItem.quantity;
      await item.save();

      const newBillItem = new BillItem({
        bill_id: bill._id,
        item_id: item._id,
        quantity: billItem.quantity
      });
      await newBillItem.save();

      total += item.price * billItem.quantity;
    }
    bill.total = total;
    await bill.save();
    res.status(201).send(bill);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Retrieve all bills
router.get('/bills', async (req, res) => {
  try {
    const bills = await Bill.find({});
    res.send(bills);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get details of a specific bill
router.get('/bills/:id', async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).send();
    }
    const billItems = await BillItem.find({ bill_id: bill._id }).populate('item_id');
    res.send({ bill, items: billItems });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
