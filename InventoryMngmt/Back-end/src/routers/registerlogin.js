const express = require("express");
const registerLogin = new express.Router();

const RegisterData = require("../models/register");

// registerLogin.get("/register", async (req, res) => {
//   try {
//     const findAll = await RegisterData.find();
//     res.status(201).send(findAll);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

registerLogin.post("/register", async (req, res) => {
  try {
    const registeremp = new RegisterData(req.body);
    await registeremp.save();
    res.status(200).send(registeremp);
  } catch (error) {
    res.status(400).send(error);
  }
});

registerLogin.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const usermail = await RegisterData.findOne({
      email: email,
      password: password,
    });
    res.status(200).send(usermail);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = registerLogin;
