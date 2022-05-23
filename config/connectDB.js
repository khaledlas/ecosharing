const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("Database is not connected");
  }
};

module.exports = connectDB;
