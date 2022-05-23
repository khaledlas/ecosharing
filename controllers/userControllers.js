const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  // const image = "";
  // if (req.file) {
  //   image: req.file.filename;
  // }
  try {
    const found = await users.findOne({ email });

    if (found) {
      return res.status(400).send({ errors: [{ msg: "User alredy exist" }] });
    }

    const newUser = new users({
      ...req.body,
      // profilePicture: req.file.filename,
    });

    ///bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    newUser.password = hashPassword;
    ///jwt
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    await newUser.save();
    res.status(200).send({ msg: "Register with success", newUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Could not register" }] });
  }
};

exports.Login = async (req, res) => {
  const { email, password, id } = req.body;
  try {
    const foundUser = await users.findOne({ email });
    if (!foundUser) {
      return res.status().send({ errors: [{ msg: "Bad credentials" }] });
    }
    //bcrypt password
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials" }] });
    }
    //jwt
    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    res.status(200).send({ msg: "Login with success!", foundUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Could not login" }] });
  }
};
//Get users
exports.GetUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    res.status(200).send({ msg: "All users", allUsers });
  } catch (error) {
    res.status(500).send("could not get allusers");
  }
};

//update user
exports.UpdateUser = async (req, res) => {
  if (req.body._id === req.params._id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    try {
      const updateUser = await users.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send({ msg: "Account has been updated", updateUser });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

//follow a user
exports.FollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await users.findById(req.params.id);
      const currentUser = await users.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).send({ msg: "user has been followed" });
      } else {
        res.status(403).send({ msg: "you allready follow this user" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).send({ msg: "You cant follow yourself" });
  }
};
//unfollow a user

exports.UnFollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await users.findById(req.params.id);
      const currentUser = await users.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).send({ msg: "User has been unfollowed" });
      } else {
        res.status(403).send({ msg: "you dont follow this user" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).send({ msg: "you cant unfollow yourself" });
  }
};
//Admin
//Delete user
exports.DeleteUser = async (req, res) => {
  try {
    const deleteUser = await users.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "User deleted", deleteUser });
  } catch (error) {
    res.status(500).send("could not delete user");
  }
};
exports.UploadPicture = async (req, res) => {
  if (req.body._id === req.params._id) {
    try {
      const newPicture = await users.findByIdAndUpdate(req.params.id, {
        profilePicture: req.file.filename,
      });

      const savedPicture = await newPicture.save();
      res.status(200).send({ msg: "Your picture is added", savedPicture });
    } catch (error) {
      res.status(500).send("Your picture could not be added!");
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};
