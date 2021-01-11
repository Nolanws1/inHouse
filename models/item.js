const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  ID: { type: Number, required: true },
  itemNumber: { type: String, required: true, unique: true },
  itemName: { type: String, required: true },
  category: {type: String},
  qty: { type: Number },
});

const Item = mongoose.model("Item", item);

module.exports = Item;
