const express = require("express");
const router = express.Router();
const axios = require("axios");

//route tous les caractères :

router.get("/avengers", async (req, res) => {
  try {
    const { limit, skip } = req.query;
    // console.log(limit);
    // console.log(skip);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${skip}&limit=${limit}&apiKey=72ydvnidL7wgZOuO`
    );
    // console.log(response.data);
    //on envoie la réponse à notre Front
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

module.exports = router;
