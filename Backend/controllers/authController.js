var bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to backend");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phno, password } = req.body;
    let emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(200).send({ msg: "email already exists" });
    } else {
      // const saltRound = 10;
      // let hashPassword = await bcrypt.hash("password" ,saltRound );

      const createdData = await User.create({
        username,
        email,
        phno,
        password,
      });
      // console.log(hashPassword);
      res.status(200).send({
        message: createdData,
        token: await createdData.generateToken(),
      });
    }
  } catch (e) {
    res.status(400).send({ msg: "page not found " + e });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let userExists = await User.findOne({email});
    console.log("userExists:", userExists);

    if (!userExists) {
      return res.status(401).json({ message: "user doesn't exist" });
    }
    const passwordVerification = await bcrypt.compare(
      password,
      userExists.password
    );
    console.log(password);
    console.log(userExists.password)
  console.log("passwordVerification",passwordVerification)
    
  if (passwordVerification) {
      res.status(200).json({
        message: "login successful...",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      res.status(401).json({
        message: "Invalid email or password...",
      });
    }
  } catch (error) {
    console.log("Internal server error ", error);
  }
};
module.exports = { home, register, login };
