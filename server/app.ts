const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/User.ts");
const UserModel = mongoose.model("users");

app.use(express.json());
app.use(cors());

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post("/register", (req, res) => {
  const name = req.body.name;
  const lastName = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const password = req.body.password;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;

  res.send(name);

  // UserModel.findOne({email: email})
  // .then((user) => {
  //   if (user) {

  //   }
  // })
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running.");
});
