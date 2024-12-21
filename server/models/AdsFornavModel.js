const mongoose = require("mongoose");

const AdsFornavSchmea = new mongoose.Schema({
  picture: {
    secure_url: {
      type: String,
      required: true,
    },
    bytes: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },

  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  expireDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("AdsFornav", AdsFornavSchmea);
