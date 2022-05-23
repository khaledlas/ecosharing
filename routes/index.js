const express = require("express");
const Router = express.Router();

const upload = require("../server");

/* GET home page. */
Router.get("/", function (req, res, next) {
  res.render("home");
});
Router.get("/home", function (req, res, next) {
  res.render("home");
});

// Single file Upload - image key should be passed postman
// Router.post("/addquidproquo", upload.single("picture"), (req, res, next) => {
//   console.log(req.file); // UPLOADED FILE DESCRIPTION RECEIVED
//   res.send("uploaded successfully");
// });

module.exports = Router;
