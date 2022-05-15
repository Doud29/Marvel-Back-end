const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const { limit, skip } = req.query;
    //on réalise une requête à notre API grâce à axios.get.
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?skip=${skip}&limit=${limit}&apiKey=72ydvnidL7wgZOuO`
    );
    // console.log(response.data);
    //on envoie la réponse à notre Front
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

module.exports = router;
