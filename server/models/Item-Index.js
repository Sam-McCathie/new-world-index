const mongoose = require("mongoose");

const ItemIndexSchema = new mongoose.Schema({
  item: {
    type: String,
    // required: true,
  },
  value: {
    type: Number,
    // required: true,
  },
  source: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    // required: true,
  },
  fromWhat: {
    type: String,
  },
  updated: {
    type: String,
    // required: true,
  },
  priceHistory: {
    type: Array,
    // required: true,
  },
});

const ItemModel = mongoose.model("item-index", ItemIndexSchema);
module.exports = ItemModel;
