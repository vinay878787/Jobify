const {z} = require("zod");

const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Email is invalid" })
      .min(3, { message: "Email must be at least 3 characters" })
      .max(255, { message: "Email must be less than 255 characters" }),
  
    password: z.string({ required_error: "Password is required" })
      .min(5, { message: "Password must be minimum 5 characters" })
      .max(255, { message: "Password must be less than 255 characters" }),
  
  });
  
  module.exports =loginSchema;
  
