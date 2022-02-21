const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

mongoose.model("SignUp", SignUpSchema);
