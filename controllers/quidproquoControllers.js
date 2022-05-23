const quidproquos = require("../models/quidproquos");
const users = require("../models/users");

exports.CreateQuidproquo = async (req, res) => {
  const { name, description } = req.body;
  // const image = req.file.filename;
  // req.file !== null ? image : "";
  // if (req.file) {
  //   const image = req.file.filename;
  // }
  try {
    const newQuidproquo = new quidproquos({
      name,
      description,
      picture: req.file.filename,

      userId: req.user._id,
    });

    // const newQuidproquo = new quidproquos(req.body);

    const savedQuidproquo = await newQuidproquo.save();
    res.status(200).send({ msg: "Your share is added", savedQuidproquo });
  } catch (error) {
    res.status(500).send("Your share could not be added!");
  }
};

//get all Quidproquos
exports.AllQuidproquos = async (req, res) => {
  try {
    // const AllQuidproquos = await quidproquos.find().sort({ data: -1 });
    const allquidproquos = await quidproquos.find();

    res.status(200).send({ msg: "All Quidproquos", allquidproquos });
  } catch (err) {
    res.status(500).send("could not get all the quidproquos");
  }
};

//Update quidproquo
exports.UpdateQuidproquo = async (req, res) => {
  try {
    const updateQuidproquo = await quidproquos.findById(req.params._id);
    if (updateQuidproquo.userId === req.body.userId) {
      await updateQuidproquo.updateOne({ $set: req.body });
      res.status(200).send({ msg: "The quidproquo updated", updateQuidproquo });
    } else {
      res.status(403).send({ msg: "you can update only your quidproquo" });
    }
  } catch (error) {
    res.status(500).send("couldn't update quidproquo");
  }
};
//Delete quidproquo
exports.DeleteQuidproquo = async (req, res) => {
  try {
    const deleteQuidproquo = await quidproquos.findById(req.params.id);
    if (
      deleteQuidproquo.userId.toString() === req.user.id ||
      req.user.isAdmin === true
    ) {
      await deleteQuidproquo.deleteOne();
      res
        .status(200)
        .send({ msg: "The quidproquo was deleted", deleteQuidproquo });
    } else {
      res.status(403).send({ msg: "You can delete only your quidproquo" });
    }
  } catch (error) {
    res.status(500).send("Couldn't delete quidproquo");
  }
};
//Like / dislike a quidproquo
exports.LikeQuidproquo = async (req, res) => {
  try {
    const likeQuidproquo = await quidproquos.findById(req.params.id);
    if (!likeQuidproquo.likes.includes(req.body.userId)) {
      await likeQuidproquo.updateOne({ $push: { likes: req.body.userId } });
      res
        .status(200)
        .send({ msg: "The quidproquo has been liked", likeQuidproquo });
    } else {
      await likeQuidproquo.updateOne({ $pull: { likes: req.body.userId } });

      res.status(200).send({ msg: "The quidproquo has been disliked" });
    }
  } catch (error) {
    res.status(500).send("The quidproquo can't be liked");
  }
};
//Get a QPQ
exports.GetQuidproquo = async (req, res) => {
  try {
    const getQuidproquo = await quidproquos.findById(req.params.id);
    res.status(200).send({ getQuidproquo });
  } catch (error) {
    res.status(500).send(error);
  }
};

//get user's quidproquos

exports.UserQuidproquos = async (req, res) => {
  const { userId } = req.params;

  try {
    const userQuidproquos = await quidproquos.find({ userId });

    res.status(200).json({ userQuidproquos });
  } catch (err) {
    res.status(500).json(err);
  }
};
//get timelines Quidproquos
exports.TimelineQuidproquos = async (req, res) => {
  try {
    const currentUser = await users.findById(req.body.userId);
    const userQuidproquos = await quidproquos.find({ userId: currentUser._id });
    const friendQuidproquos = await Promise.all(
      currentUser.followings.map((friendId) => {
        return quidproquos.find({ userId: friendId });
      })
    );
    res.json(userQuidproquos.concat(...friendQuidproquos));
  } catch (err) {
    res.status(500).json(err);
  }
};
