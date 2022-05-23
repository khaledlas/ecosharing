const mongoose = require("mongoose");

const quidproquos = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    picture: {
      type: String,
    },
    // service_type: { type: Boolean, required: true },
    description: { type: String, required: true, maxlength: 500 },
    likes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true, //automatically add createdAt and updatedAt fields to your schema
  }
);
module.exports = mongoose.model("quidproquo", quidproquos);
