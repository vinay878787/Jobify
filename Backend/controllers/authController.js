var bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const home = async (req, res, next) => {
  try {
    res.status(200).send("welcome to backend");
  } catch (error) {
    // res.status(400).send({ msg: "page not found" });
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    let emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(200).send({ msg: "email already exists" });
    } else {
      // const saltRound = 10;
      // let hashPassword = await bcrypt.hash("password" ,saltRound );

      const createdData = await User.create({
        username,
        email,
        phone,
        password,
      });
      // console.log(hashPassword);
      res.status(200).send({
        message: createdData,
        token: await createdData.generateToken(),
      });
    }
  } catch (error) {
    // res.status(400).send({ msg: "page not found " + e });
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(401).json({ message: "user doesn't exist" });
    }
    const passwordVerification = await userExists.comparePassword(
      password,
      userExists.password
    );

    if (passwordVerification) {
      res.status(200).json({
        message: "login successful...",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      // res.status(401).json({
      //   message: "Invalid email or password...",
      // });
      next(error);
    }
  } catch (error) {
    // console.log("Internal server error ", error);
    next(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log("userData : ",userData);
    res.status(200).json({userData});
  } catch (error) {
    console.log("error from user route : ", error);
  }
};
module.exports = { home, register, login ,user};
