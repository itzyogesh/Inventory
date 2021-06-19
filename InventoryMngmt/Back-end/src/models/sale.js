const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  sno: {
    type: Number,
  },
  ordno: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  rate: {
    type: Number,
  },
});

module.exports = mongoose.model("Saledata", saleSchema);
