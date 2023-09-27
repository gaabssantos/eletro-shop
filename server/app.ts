const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./models/User.ts");
const UserModel = mongoose.model("users");

// DATABASE
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/eletroshop")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch((err) => {
    console.log("Error connected to Mongo.");
  });

app.get("/register", (req, res) => {
  res.send(req.body.name);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running.");
});
