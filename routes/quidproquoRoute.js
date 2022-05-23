const express = require("express");
const quidproquoRouter = express.Router();
const {
  CreateQuidproquo,
  UpdateQuidproquo,
  DeleteQuidproquo,
  LikeQuidproquo,
  GetQuidproquo,
  TimelineQuidproquos,
  UserQuidproquos,
  AllQuidproquos,
} = require("../controllers/quidproquoControllers");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");

//Creation nouveau Quidproquo
quidproquoRouter.post(
  "/addquiproquo",

  upload.single("picture"),
  isAuth,
  CreateQuidproquo
);
// quidproquoRouter.post("/", upload.single("picture"), isAuth, CreateQuidproquo);

//get timelines Quidproquos
quidproquoRouter.get("/timeline/all", isAuth, TimelineQuidproquos);

//get all Quidproquos
quidproquoRouter.get("/allquidproquos", AllQuidproquos);

//Update Quidproquo
quidproquoRouter.put(
  "/updatequidproquo/:id",
  upload.single("picture"),
  isAuth,
  UpdateQuidproquo
);
//delete a Quidproquo
quidproquoRouter.delete("/deletequidproquo/:id", isAuth, DeleteQuidproquo);
//like / dislike a Quidproquo
quidproquoRouter.put("/:id/like", isAuth, LikeQuidproquo);

//get a Quidproquo
quidproquoRouter.get("/:id", isAuth, GetQuidproquo);

//get user's quidproquos
quidproquoRouter.get("/profile/:userId", isAuth, UserQuidproquos);

module.exports = quidproquoRouter;
