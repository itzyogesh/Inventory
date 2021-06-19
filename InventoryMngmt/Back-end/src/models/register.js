const mongoose = require("mongoose");

const registerUser = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
});

const Register = mongoose.model("Loginregisterdata", registerUser);

module.exports = Register;
