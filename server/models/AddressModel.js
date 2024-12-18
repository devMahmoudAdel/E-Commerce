const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  apartmentFloor: {
    type: Number,
    required: true,
  },
  apartmentNumber: {
    type: Number,
    required: true,
  },
  Town: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Address", AddressSchema);
