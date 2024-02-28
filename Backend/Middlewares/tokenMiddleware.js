const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const tokenMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unathorized HTTP . Token not provided" });
  }

  //   assuming token in the format Bearer ....
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token from token middleware : ", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
    console.log(isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized invalid token" });
  }
};

module.exports = tokenMiddleware;
