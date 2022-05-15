const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const formidable = require("express-formidable");
const dotenv = require("dotenv").config();

app.use(formidable());
// require("dotenv").config();

//connexion à la base de données Mongoose :

mongoose.connect("mongodb://localhost:27017/comics");

//-----------------------------------------------------------------------//
//---------------//Importation de nos routes dans server //--------------//
//-----------------------------------------------------------------------//

//route comics :
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

//route avengers :
const avengersRoutes = require("./routes/avengers");
app.use(avengersRoutes);

//route comic and caracter :
const comicCharacterIdRoutes = require("./routes/comicCharacterId");
app.use(comicCharacterIdRoutes);

//route Signup :
const signupRoutes = require("./routes/signup");
app.use(signupRoutes);

//route login :
const loginRoutes = require("./routes/login");
app.use(loginRoutes);

//-----------------------------------------------------------------------//
//---------/fonction signalement si une page estintrouvable//------------//
//-----------------------------------------------------------------------//

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

//-----------------------------------------------------------------------//
//-----------------------//On lance le serveur //------------------------//
//-----------------------------------------------------------------------//

app.listen(3000, () => {
  console.log("Serveur en cours de fonctionnement");
});
