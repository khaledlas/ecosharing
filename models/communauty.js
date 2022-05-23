const mongoose = require("mongoose");

const communauty = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    owner: {
      type: String,
      required: "Please submit a user id",
    },
    members: [
      {
        userID: String, // <- THIS IS THE CHANGE
        email: String,
        role: String,
        inviteToken: String,
        inviteTokenExpires: String,
      },
    ],
    picture: {
      type: String,
    },
    // service_type: { type: Boolean, required: true },
    description: { type: String, required: true, maxlength: 500 },
  },
  {
    timestamps: true, //automatically add createdAt and updatedAt fields to your schema
  }
);
module.exports = mongoose.model("communauty", communauty);
