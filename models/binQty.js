const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const binQty = new Schema({
    warehouseCode: { type: String, required: true },
    binLocation: { type: String, required: true },
    itemNumber: { type: String, required: true },
    binQty: { type: Number, required: true },
    modifiedDate: { type: Date, default: Date.now }
});

const BinQty = mongoose.model("BinQty", binQty);

module.exports = BinQty;