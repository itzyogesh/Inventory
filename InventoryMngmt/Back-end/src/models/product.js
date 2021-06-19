const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  pcode: {
    type: String,
  },
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Productdata", Business);
