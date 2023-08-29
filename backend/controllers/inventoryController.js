const Item = require('../models/Item');

const inventoryController = {
  getAllItems: (req, res) => {
    Item.getAll((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results);
      }
    });
  },

  getItemById: (req, res) => {
    const itemId = req.params.id;
    Item.getById(itemId, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'Item not found' });
      } else {
        res.json(results[0]);
      }
    });
  },

  createItem: (req, res) => {
    const newItem = req.body;
    Item.create(newItem, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ message: 'Item created successfully' });
      }
    });
  },

  updateItem: (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    Item.update(itemId, updatedItem, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Item updated successfully' });
      }
    });
  },

  deleteItem: (req, res) => {
    const itemId = req.params.id;
    Item.delete(itemId, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Item deleted successfully' });
      }
    });
  },
};

module.exports = inventoryController;