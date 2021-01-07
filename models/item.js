const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  ID: { type: Number, required: true },
  "Item Number": { type: String, required: true },
  "Item Name": { type: String, required: true },
  "Category": {type: String},
  "Qty": { type: Number, required: true },
});

const Item = mongoose.model("Item", item);

module.exports = Item;
