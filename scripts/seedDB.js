const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warehouse");

const items = [
  {
    "ID": 7,
    "Item Number": "7000",
    "Item Name": "Lamp A",
    "Category": "Living",
    "Qty": 100
  },
  {
    "itemNumber": "8000",
    "itemName": "Lamp B",
    "category": "Living",
    "qty": 40
  },
  {
    "ID": 9,
    "Item Number": "9000",
    "Item Name": "Desk A",
    "Category": "Kitchen",
    "Qty": 50
  }
];

const warehouses = [
  {
    "ID": 7,
    "Item Number": "7000",
    "Item Name": "Lamp A",
    "Category": "Living",
    "Qty": 100
  },
  {
    "ID": 8,
    "Item Number": "8000",
    "Item Name": "Lamp B",
    "Category": "Living",
    "Qty": 40
  },
  {
    "ID": 9,
    "Item Number": "9000",
    "Item Name": "Desk A",
    "Category": "Kitchen",
    "Qty": 50
  }
];

db.Item.remove({})
  .then(() => db.Item.collection.insertMany(items))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Warehouse.remove({})
  .then(() => db.Warehouse.collection.insertMany(warehouses))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });