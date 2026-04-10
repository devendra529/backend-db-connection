 //  Mongoose schemas/models

 //  Importing mongoose (used to create schema and interact with MongoDB)
const mongoose = require("mongoose");

// creating the user schems this is the structure of the data in the databsewe wnat to store name and email
const userSchema = new mongoose.Schema({
  name: String,  
  email: String,
});


// Export a model based on schema, this alows us to interact with the users collection in the database

module.exports = mongoose.model("User", userSchema);