const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const db = require("../Backend/utils/db");
const authRouter = require("./router/authRouter");
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth/", authRouter);

db().then(() => {
  app.listen(PORT, () => {
    console.log(`server up and running at http://localhost:${PORT}/`);
  });
}).catch((e)=>{
    console.log("error",e);
})
