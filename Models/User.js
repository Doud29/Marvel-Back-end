//-----------------------------------------------------------------------//
//------------------//MODEL pour la base de données//--------------------//
//-----------------------------------------------------------------------//

const mongoose = require("mongoose");

const User = mongoose.model("User", {
  //MODEL;
  username: String,
  email: String,
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
