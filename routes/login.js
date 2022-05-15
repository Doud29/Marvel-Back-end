const express = require("express");
const router = express.Router();

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const User = require("../Models/User");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.fields;
    console.log(req.fields);
    const isUserexisting = await User.findOne({ email: email });
    console.log(isUserexisting);
    if (isUserexisting) {
      const newHash = SHA256(password + isUserexisting.salt).toString(
        encBase64
      );
      console.log(newHash);
      console.log(isUserexisting.hash);
      if (isUserexisting.hash === newHash) {
        return res.status(200).json({
          _id: isUserexisting._id,
          username: isUserexisting.username,
          email: isUserexisting.email,
          token: isUserexisting.token,
        });
      } else {
        return res.status(400).json("compte introuvale");
      }
    } else {
      return res.status(400).json("compte insexistant");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
