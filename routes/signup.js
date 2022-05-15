const express = require("express");
const router = express.Router();
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const mongoose = require("mongoose");

const User = require("../Models/User");

//route
router.post("/signup", async (req, res) => {
  try {
    //   destructure nos éléments
    const { username, email, password } = req.fields;

    const isUserexisting = await User.findOne({
      email: email,
    });

    const salt = uid2(64);
    const hash = SHA256(password + salt).toString(encBase64);
    console.log(hash);
    const token = uid2(64);

    // console.log(isUserexisting);
    if (isUserexisting === null) {
      const newUser = new User({
        username: username,
        email: email,
        token: token,
        hash: hash,
        salt: salt,
      });

      await newUser.save();
      return res.json({ newUser });
    } else {
      return res.json("cet email existe déjà!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
