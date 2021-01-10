const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const layout = new Schema({
  ID: { type: Number, required: true },
  warehouseCode: { type: String, required: true },
  isle: { type: String, required: true },
  bin: { type: String, required: true },
  shelfNo: { type: Number, required: true },
  binLocation: { type: String, required: true },
});

const Layout = mongoose.model("Layout", layout);

module.exports = Layout;
