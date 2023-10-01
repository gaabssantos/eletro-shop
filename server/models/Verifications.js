const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Verification = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
});

mongoose.model("verifications", Verification);