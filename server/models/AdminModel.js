const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    email: {
      type: String,
      required: true,
      unique: true,
      validator: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
      },
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (v) {
          return this.password === v;
        },
        message: "Passwords do not match",
      },
    },
    allorders:{
    type:[mongoose.Schema.Types.ObjectId],
    default:[],
    required:false,
    },
    allproducts:{
    type:[mongoose.Schema.Types.ObjectId],
    default:[],
    required:false,
    },
  createdAt: {
    type: Date,
    default: Date.now
  },
})
module.exports = mongoose.model("Admin", AdminSchema);