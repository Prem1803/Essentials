const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getTrimmedMobileNumber } = require("../utils/helperFunction");

const cartSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);
const wishListSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
});
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    profile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    alternateMobileNumber: {
      type: String,
      trim: true,
    },
    seller: {
      type: Boolean,
      default: false,
    },
    sellerRightsApproved: {
      type: Boolean,
      default: false,
    },
    store: {
      type: String,
    },
    address: {
      houseNumber: {
        type: String,
        trim: true,
        default: "",
      },
      area: {
        type: String,
        trim: true,
        default: "",
      },
      city: {
        type: String,
        trim: true,
        default: "",
      },
      state: {
        type: String,
        trim: true,
        default: "",
      },
    },
    cart: {
      type: Map,
      of: cartSchema,
      default: {},
    },
    wishlist: {
      type: Map,
      of: wishListSchema,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      firstName: user.firstName,
    },
    process.env.SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    }
  );
  return token;
};

userSchema.statics.findByCredentials = async (username, password) => {
  let user;
  if (username.includes("@"))
    user = await User.findOne({
      email: username,
    });
  else {
    username = getTrimmedMobileNumber(username);
    user = await User.findOne({
      mobileNumber: username,
    });
  }
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
