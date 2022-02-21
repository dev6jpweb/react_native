const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./modal/SignUpSchema");
// models
const SignUp = mongoose.model("SignUp");
// czkAiVkmQvi6eKHK;
app.use(bodyParser.json());

const mongoUri =
  "mongodb+srv://dev66:czkAiVkmQvi6eKHK@cluster0.znifm.mongodb.net/react_native?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.get("/", async (req, res) => {
  const user = await logIn.find({});
  res.json(user);
});

// SignUP route
app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  const signUpData = await SignUp.create({
    name,
    email,
    password,
  })
    .then((data) => {
      res.status(200).send("success");
    })
    .catch((error) => {
      console.log("error", error);
    });
});
// LogIn route
app.post("/logIn", async (req, res) => {
  const { password, email } = req.body;
  if (!email || !password) {
    res.send("Please enter email or password");
  }
  const user = await SignUp.findOne({ email }).select("+password");
  if (!user) {
    res.send("INvalid email or password");
  }

  const passwordMatch = (await user.password) === password;
  if (!passwordMatch) {
    res.send("Either email or password don't match");
  }
  return res.status(200).send(user);
});
app.listen(3000, () => {
  console.log("server running at port 3000");
});
