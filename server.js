const express = require("express");
const connectDB = require("./config/connectDB");
const quidproquoRouter = require("./routes/quidproquoRoute");
const Router = require("./routes/userRoute");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();
//ROUTES
app.use(express.json());
app.use("/api/auth", Router);
app.use("/api/quidproquos", quidproquoRouter);
// app.use("/picture", express.static("uploads"));
// app.use(express.static("../MYPROJECT_GOMYCODE/client/public/uploads")); //here is important thing - no static directory, because all static :)

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "server.js"));
// });

//HEROKU
// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(
  PORT,
  console.log(`Server is up and running on http://localhost:${PORT}`)
);
