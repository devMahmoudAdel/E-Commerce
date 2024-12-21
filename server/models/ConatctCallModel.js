const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactCallschema = new Schema({
  Heading: {
    type: String,
    trim: true,
  },
  Descriptions: {
    type: String,
  },
  Phone: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("ContactCall", contactCallschema);
