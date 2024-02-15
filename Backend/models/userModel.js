var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phno: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
  } catch (error) {
    console.log("hashing the password problem", error);
    next(error);
  }
});

// JSON web token

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_KEY
    );
  } catch (error) {
    console.log(error);
  }
};
// define the model or collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
