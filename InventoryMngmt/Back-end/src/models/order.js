const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  ordno: {
    type: Number,
  },
  ccode: {
    type: String,
  },
  pcode: {
    type: String,
  },
  qty: {
    type: Number,
  },
});

module.exports = mongoose.model("Orderdata", OrderSchema);
