const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouse = new Schema({
  warehouseCode: { type: String, required: true },
});

const Warehouse = mongoose.model("Warehouse", warehouse);

module.exports = Warehouse;
