const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouse = new Schema({
  ID: { type: Number, required: true },
  WarehouseCode: { type: String, required: true },
});

const Warehouse = mongoose.model("Warehouse", warehouse);

module.exports = Warehouse;
