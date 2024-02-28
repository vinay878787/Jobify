const express = require("express");
const authController = require("../controllers/authController");
const signUpSchema = require("../validators/authValidator");
const loginSchema = require("../validators/loginValidator");
const validator = require("../Middlewares/authValidatorMiddleware");
const tokenMiddleware = require("../Middlewares/tokenMiddleware");
const router = express.Router();

router.route("/").get(authController.home);
router.route("/register").post(validator(signUpSchema),authController.register);
router.route("/login").post(validator(loginSchema),authController.login);
router.route("/user").get(tokenMiddleware , authController.user);
module.exports = router;
