const mongoose = require("mongoose");

const BroductSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
      unique: true,
    },
    Brand: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    categories: {
      type: [String],
      required: true,
      default: [],
    },
    discription: {
      type: String,
      minlength: 10,
      maxlength: 1000,
    },
    images: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    varaity1: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    varaity2: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    varaity3: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    invertoryStock: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderedManyTimes: {
      type: Number,
      required: false,
      default: 0,
    },
    Admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", BroductSchema);
