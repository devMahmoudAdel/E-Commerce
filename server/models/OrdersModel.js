const mongoose = require("mongoose");

const OrdseSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "canceled"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash on delivery", "vodafone cash", "instapay"],
      required: true,
    },
    deliveryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
    },
    adressText: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      enum: ["Pending", "In Transit", "Delivered", "Returned", "Cancelled"],
      default: "Pending",
    },
    isReturn: {
      type: Boolean,
      default: false,
    },
    returnRequestDate: {
      type: Date,
      default: null,
    },
    returnRequestStatus: {
      type: String,
      enum: ["Pending", "Requested", "Canceled", "Returned"],
      default: "Pending",
    },
    returnedProduct: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "products",
      default: null,
    },

    returnMaxTime: {
      type: Date,
      default: null,
    },

    EditMaxTime: {
      type: Date,
      default: null,
    },

    deliveryPhoneNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },

    deliveredDate: {
      type: Date,
      default: null,
    },
    canceledDate: {
      type: Date,
      default: null,
    },
    canceledReason: {
      type: String,
      default: null,
    },
    trackingNumber: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", OrdseSchema);

