const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventory = new Schema({
  ID: { type: Number, required: true, unique: true },
  warehouseCode: { type: String, required: true },
  bin: { type: String, required: true },
  shelfNo: { type: Number, required: true },
  binLocation: { type: String, required: true },
  itemNumber: { type: String, required: true },
  qty: { type: Number, required: true },
  trxType: { type: String, required: true },
  cratedDate: { type: Date, default: Date.now }
});

const Inventory = mongoose.model("Inventory", inventory);

module.exports = Inventory;
