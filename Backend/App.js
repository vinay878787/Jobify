const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../Backend/utils/db");
const errorMiddleware = require("../Backend/Middlewares/errorMiddleware"); // Import errorMiddleware
const authRouter = require("./router/authRouter");
const contactRouter = require("./router/contactRoute");
const serviceRouter = require("./router/serviceRouter");
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use("/api/auth/", authRouter);
app.use("/api/", contactRouter);
app.use("/api/",serviceRouter);
app.use(errorMiddleware);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server up and running at http://localhost:${PORT}/`);
    });
  })
  .catch((e) => {
    console.log("error", e);
  });
