const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const db = async ()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("DB connected");
    } catch (error) {
        console.log("DB connection error");
    }
}
module.exports = db;