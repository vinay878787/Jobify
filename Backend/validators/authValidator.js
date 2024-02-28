const {z} = require("zod");

const signUpSchema = z.object({
    username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name must be minimum 3 characters..." })
      .max(255, { message: "Name must not be more than 255 characters" }),
  
    email: z.string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Email is invalid" })
      .min(3, { message: "Email must be at least 3 characters" })
      .max(255, { message: "Email must be less than 255 characters" }),
  
    password: z.string({ required_error: "Password is required" })
      .min(5, { message: "Password must be minimum 5 characters" })
      .max(255, { message: "Password must be less than 255 characters" }),
  
    phone: z.string({ required_error: "Phone number is required" })
      .min(10, { message: "Phone number must be minimum 10 characters" })
      .max(10, { message: "Phone number must be exactly 10 characters" })
  });
  
  module.exports = signUpSchema;
  
