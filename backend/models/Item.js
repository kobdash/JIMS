const db = require('../db');

// Retrieve all items
Item.getAll((err, results) => {
  if (err) throw err;
  console.log(results);
});

// Retrieve an item by ID
const itemId = 1; // Change this to the desired item ID
Item.getById(itemId, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Create a new item
const newItem = {
  name: 'New Item',
  category: 'Some Category',
  quantity: 10
};
Item.create(newItem, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Update an existing item
const itemIdToUpdate = 1; // Change this to the ID of the item to update
const updatedItem = {
  name: 'Updated Item',
  category: 'Updated Category',
  quantity: 20
};
Item.update(itemIdToUpdate, updatedItem, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// Delete an item
const itemIdToDelete = 2; // Change this to the ID of the item to delete
Item.delete(itemIdToDelete, (err, result) => {
  if (err) throw err;
  console.log(result);
});