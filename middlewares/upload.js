const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../MYPROJECT_GOMYCODE/client/public/uploads");
  },
  filename: function (req, file, cb) {
    // const fileName = ;
    cb(null, file.originalname.toLowerCase().split(" ").join("-"));
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

exports.upload = multer({ storage: storage });
