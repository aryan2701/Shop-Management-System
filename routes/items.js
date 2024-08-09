// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Add new item
router.post('/items', async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Retrieve all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
