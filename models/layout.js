const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const layout = new Schema({
  ID: { type: Number, required: true },
  "Warehouse Code": { type: String, required: true },
  "Isle": { type: String, required: true },
  "Shelf": { type: String, required: true },
  "Shelf No": { type: Number, required: true },
  "Shelf Location": { type: String, required: true },
});

const Layout = mongoose.model("Layout", layout);

module.exports = Layout;
