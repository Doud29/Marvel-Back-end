const express = require("express");
const router = express.Router();
const axios = require("axios");

//route pour obtenir tout les carcatères :

router.get("/comics/:characterId", async (req, res) => {
  try {
    const id = req.params.characterId;
    const { limit, skip } = req.query;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?skip=${skip}&limit=${limit}&apiKey=72ydvnidL7wgZOuO`
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

module.exports = router;
