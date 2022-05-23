const mongoose = require("mongoose");

const users = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthdate: Date,
    gender: String,
    followers: {
      type: Array,
      default: [],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //automatically add createdAt and updatedAt fields to your schema
  }
);

module.exports = mongoose.model("user", users);
