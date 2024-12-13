const mongoose = require("mongoose");
const cartschame = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
      },
    ],
    totalPrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartschame);
