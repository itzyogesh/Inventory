const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Customer = new Schema({
  ccode: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Customerdata", Customer);
