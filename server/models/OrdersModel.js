const mongoose = require("mongoose");

const validator = require("validator");

const OrdseSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,

      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },
    customerId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
          default: 0,
          validate: {
            validator: function (v) {
              return v > 0;
            },
            message: "{VALUE} must be a positive number",
          },
        },
      },
    ],

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
      enum: [
        "Pending",
        "Shipped",
        "Delivered",
        "canceled",
        "returning",
        "returned",
      ],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash on delivery", "vodafone cash", "instapay", "from wallet"],
      required: true,
      default: "cash on delivery",
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
      enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
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
    returnedProduct: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
          default: 0,
          validate: {
            validator: function (v) {
              return v > 0;
            },
            message: "{VALUE} must be a positive number",
          },
        },
      },
    ],

    returnMaxTime: {
      type: Date,
      default: Date.now() + 10000000,
    },

    EditMaxTime: {
      type: Date,
      default: null,

      default: Date.now() + 100000,
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

    trackingNumber: {
      type: String,
      default: null,
      // unique: true,
    },
    returnreason: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrdseSchema);
