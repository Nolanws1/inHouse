const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const layout = new Schema({
  warehouseCode: { type: String },
  isle: { type: String, required: true },
  bin: { type: String, required: true },
  shelfNo: { type: Number, required: true },
  binLocation: { type: String, required: true, unique: true },
  capacity: { type: Number }
});

const Layout = mongoose.model("Layout", layout);

module.exports = Layout;
