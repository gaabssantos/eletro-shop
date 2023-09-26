const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DATABASE
mongoose
  .connect("mongodb://localhost/eletroshop")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch((err) => {
    console.log("Error connected to Mongo.");
  });

app.get("/register/:name", (req, res) => {
  res.send(req.params.name);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running.");
});
