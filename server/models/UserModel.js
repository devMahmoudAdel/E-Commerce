const mongoose = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,

      minlength: 4,

      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9]+$/.test(v);
        },
        message: "Username can only contain alphanumeric characters",
      },
    },

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    phoneNumber: {
      type: String,


      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },

    avatar: {
      type: String,
    },
    Cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },

    addresses: {
      type: [mongoose.Schema.Types.ObjectId],

      ref: "Address",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    Wishlist: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "product",
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    walletbalance: {
      type: Number,
      default: 0,
      min: 0,
      max: 100000,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,

  },
  {
    timestamps: true,
  }
);


UserSchema.pre("save", async function (next) {
  console.log("pre save");
  if (!this.isModified("password")) return next();
  console.log("crypr");
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

UserSchema.methods.hashPassword = async function (pass) {
  return await bcrypt.hash(pass, 12);
};

UserSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpires = Date.now() + 100 * 60 * 1000;

  return resetToken;
};

UserSchema.methods.comparePasswordInDB = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

UserSchema.methods.isPasswordChanged = async function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const pswdChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < pswdChangedTimestamp;
  }
  return false;
};


module.exports = mongoose.model("users", UserSchema);
