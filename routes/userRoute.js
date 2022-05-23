const express = require("express");
const {
  Register,
  Login,
  FollowUser,
  GetUsers,
  UnFollowUser,
  UpdateUser,
  DeleteUser,
  UploadPicture,
} = require("../controllers/userControllers");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const {
  RegisterValidation,
  LoginValidation,
  validation,
} = require("../middlewares/validation");
const users = require("../models/users");

const Router = express.Router();

Router.post(
  "/register",
  upload.single("profilePicture"),
  RegisterValidation,
  validation,

  Register
); //API REGISTER

Router.post("/login", LoginValidation, validation, Login); //API LOGIN

//method get
//api : /current

Router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});

/* GET users listing. */
Router.get("/users", GetUsers);

//update user
// Router.put("/update/:id", upload.single("profilPicture"), isAuth, UpdateUser);
Router.put("/update/:id", isAuth, UpdateUser);

Router.put("/:id/follow", FollowUser); //Follow a user

Router.put("/:id/unfollow", UnFollowUser); // Unfollow a user

Router.delete("/deleteuser/:id", DeleteUser); //Supprimer un user

Router.put(
  "/addavatar/:id",
  upload.single("profilePicture"),
  isAuth,
  UploadPicture
); //ajouter un avatar

module.exports = Router;
