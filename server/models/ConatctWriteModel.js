const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactWritemodel = new Schema({
  Heading: {
    type: String,
    // required: true,
    trim: true,
  },
  Description: {
    type: String,
    // required: true
  },
  Email1: {
    type: String,
    // required: true,
    trim: true,
  },
  Email2: {
    type: String,
    // required: true,
    trim: true,
  },
});
module.exports = mongoose.model("WriteCall", contactWritemodel);

